import React, { useState } from "react";
import { Plus, Instagram, Loader } from "lucide-react";
import "./GuestBook.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbladvjv"; // <-- put your endpoint here

const GuestBook = ({ onOpenWindow }) => {
  const handleLeaveMessage = () => {
    if (onOpenWindow) {
      onOpenWindow({
        id: "guestbook-form",
        name: "Leave a Message",
        component: <MessageForm />,
        defaultSize: [320, 450],
      });
    }
  };

  return (
    <div className="guestbook-app">
      <div className="guestbook-header">
        <button className="leave-message-button" onClick={handleLeaveMessage}>
          <Plus size={14} />
          Leave a message
        </button>
      </div>

      {/* (Optional) You can list recent messages here in the future if you add a backend.
          With Formspree (free), messages go to your email + Formspree dashboard. */}
      <div className="guestbook-messages-section empty-hint">
        <p>Have something to say? </p>
        <p>Hit “Leave a message” </p>
        <p>— I read every reply 💬</p>
      </div>
    </div>
  );
};

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState(""); // spam trap

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      // Build FormData payload for Formspree
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append(
        "website",
        formData.instagram ? `https://instagram.com/${formData.instagram}` : ""
      );
      fd.append("message", formData.message);

      // Optional metadata for nicer emails
      fd.append("_subject", "New message from GuestBook");
      // Honeypot (leave empty; bots often fill it)
      fd.append("_gotcha", honeypot);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" }, // tells Formspree we want JSON response
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.errors?.[0]?.message || "Failed to send message.");
      }

      setShowSuccess(true);
      setFormData({ name: "", instagram: "", message: "" });
      setHoneypot("");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="message-form">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>Message Sent!</h3>
          <p>Thanks — it’s landed in my inbox. I’ll read it soon.</p>
          <p className="success-last">You can close this window now.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="message-form">
      <form onSubmit={handleSubmit} className="message-form-content">
        {/* Honeypot field (hidden from humans) */}
        <input
          type="text"
          name="_gotcha"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="form-field">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-field instagram-field">
          <div className="instagram-input-container">
            <Instagram size={16} className="instagram-icon" />
            <input
              type="text"
              name="instagram"
              placeholder="Instagram (optional)"
              value={formData.instagram}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-field">
          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader className="loading-spinner" size={16} /> Sending…
            </>
          ) : (
            "Submit Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default GuestBook;
