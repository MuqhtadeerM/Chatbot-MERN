# 🤖 Chatbot Platform – Full Stack AI SaaS

A production‑ready, ChatGPT‑style AI chatbot platform built using the **MERN Stack** with authentication, multi‑agent support, and OpenRouter LLM integration.

---

## 🚀 Features

* 🔐 JWT Authentication (Register / Login / Logout)
* 🧠 AI Agent Management (Create multiple AI agents with system prompts)
* 💬 ChatGPT‑style Chat UI
* ⚡ Real‑time AI responses using OpenRouter (GPT‑4o Mini)
* 🗂 Project based chat memory
* 🎨 Professional SaaS UI (Login, Dashboard, Chat)
* 🛡 Secure API with middleware protection

---

## 🏗 Tech Stack

### Frontend

* React (Vite)
* React Router
* Axios
* Custom CSS (ChatGPT Style UI)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* OpenRouter API (LLM)

---

## 📂 Project Structure

```
Chatbot-MERN-Stack
│
├── backend
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   ├── auth.controller.js
│   │   │   ├── project.controller.js
│   │   │   └── chat.controller.js
│   │   ├── middleware
│   │   │   └── auth.middleware.js
│   │   ├── models
│   │   │   ├── User.model.js
│   │   │   └── Project.model.js
│   │   ├── routes
│   │   │   ├── auth.routes.js
│   │   │   ├── project.routes.js
│   │   │   └── chat.routes.js
│   │   ├── services
│   │   │   └── llm.service.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── api
│   │   │   └── api.js
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Chat.jsx
│   │   ├── styles
│   │   │   ├── auth.css
│   │   │   ├── dashboard.css
│   │   │   └── chatgpt.css
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## 🔧 Environment Variables

### Backend `.env`

```
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/chatbot-platform.git
cd chatbot-platform
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file and add environment variables.

```bash
npm run dev
```

Backend runs on: `http://localhost:5000`

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## 🔐 API Endpoints

### Auth

| Method | Route              | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

### Projects

| Method | Route         | Description       |
| ------ | ------------- | ----------------- |
| GET    | /api/projects | Get user projects |
| POST   | /api/projects | Create project    |

### Chat

| Method | Route                | Description        |
| ------ | -------------------- | ------------------ |
| POST   | /api/chat/:projectId | Chat with AI agent |

---

## 🧠 How It Works

1. User registers and logs in
2. JWT token stored in localStorage
3. User creates AI agents with system prompts
4. Chat UI sends messages to backend
5. Backend calls OpenRouter LLM
6. AI response returned and displayed

---

## 🎤 Interview Pitch

> “I built a full‑stack ChatGPT‑style AI SaaS platform using React, Node.js, MongoDB, and OpenRouter. It supports authentication, multi‑agent prompts, secure APIs, and a professional UI with real‑time AI chat.”

---

## 📜 License

MIT License

---

## ⭐ Star the Repo

If you found this helpful, please star this repository and share it with others 🚀

---

## 👨‍💻 Author

**Muhammed Muqhtadeer**
Final Year CSE Student | Full Stack Developer | AI Engineer

---

## 🔗 Future Enhancements

* File upload (RAG Knowledge Base)
* Conversation history
* Voice chat
* Team collaboration
* Deployment to Vercel + Render

---

Happy Coding ❤️
