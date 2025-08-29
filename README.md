# 🚀 Ahnaf Ali – Portfolio Website  

An interactive portfolio built with **React + Vite**, styled like a **desktop environment**.  
Includes a **macOS-style Terminal**, **Startup screen**, **Experience & Education section**, and a **Guestbook** for visitors to leave messages.  

---

## ✨ Features
- **Startup Screen** – Intro with theme toggle (dark/light).  
- **Terminal App** – Simulated macOS terminal with commands like `ls`, `cat`, `cd`, `tree`, etc.  
- **Experience & Education** – Displays professional experience, education, and hackathons.  
- **Guestbook** – Visitors can leave messages (connected to Formspree / Google Sheets).  
- **Projects Section** – Showcases portfolio projects (Portfolio Website, Terminal App, Guestbook).  
- **Dark/Light Mode** – Toggle between themes seamlessly.  

---

## 📂 Project Structure
src/
├── apps/
│ ├── StartupScreen/
│ ├── Terminal/
│ ├── Experience/
│ ├── GuestBook/
├── assets/
│ ├── icons/
│ ├── images/
├── contexts/
│ └── ThemeContext.jsx
├── data.json
└── App.jsx


---

## ⚡ Tech Stack
- **Frontend**: React + Vite  
- **Icons**: [lucide-react](https://lucide.dev/)  
- **Styling**: CSS + custom themes  
- **Guestbook**: Formspree / Google Sheets integration  
- **Deployment**: Netlify / Vercel  

---

## 🖥️ Terminal Commands
The terminal app supports commands such as:  

- `help` – List commands  
- `ls`, `cd`, `pwd`, `cat` – File navigation  
- `about`, `contact`, `experience`, `projects` – Show portfolio info  
- `tree`, `find`, `grep`, `wc`, `head`, `tail` – File utilities  
- `git`, `npm`, `curl`, `ping`, `ssh` – Fun simulated commands  
- `clear`, `exit` – Terminal actions  

---

## 📦 Installation
```bash
# Clone the repo
git clone https://github.com/meahnaf/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run locally
npm run dev
