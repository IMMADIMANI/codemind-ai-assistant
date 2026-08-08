# 🚀 CodeMind - AI Developer Assistant

> An AI-powered developer workspace that helps developers write, debug, analyze, and understand code using Groq's ultra-fast Llama models.

---

## 🌐 Live Demo

### 🚀 [Try CodeMind Live](https://codemind-ai-assistant.vercel.app/)

**Frontend:** https://codemind-ai-assistant.vercel.app/

**Backend API:** `https://your-render-url.onrender.com`

> CodeMind is fully deployed with the frontend hosted on Vercel and the backend hosted on Render.

---

# 📖 Overview

**CodeMind** is an AI-powered developer assistant designed to improve coding productivity.

It provides developers with an interactive workspace for programming assistance, code analysis, debugging, documentation generation, and AI-powered project knowledge search.

### What CodeMind can do

* 💬 Chat with AI for programming assistance
* 🔍 Analyze and explain code
* 🐞 Identify and debug coding issues
* 📝 Generate documentation
* 📂 Search project knowledge using RAG
* ⚡ Generate fast AI responses using Groq and Llama

The application is built using a modern full-stack architecture with **React, FastAPI, and Groq AI** and is deployed to the cloud.

---

# ✨ Features

* 🤖 AI Chat Assistant
* 🧠 Code Analysis
* 🐞 Bug Detection & Debugging
* 📄 Documentation Generator
* 📂 RAG-based Knowledge Search
* ⚡ Fast AI Inference with Groq
* 🌙 Modern Dark UI
* 📱 Responsive Design
* 🔐 Secure API Key Management
* ☁️ Cloud Deployment

---

# 🏗️ Architecture

```text
                    🌐 Vercel
                       │
                       ▼
              ⚛️ React + Vite
                  Frontend
                       │
                       │ REST API
                       ▼
                 ☁️ Render
                       │
                       ▼
                ⚡ FastAPI
                  Backend
                       │
                       ▼
            🧠 AI / Prompt Layer
                       │
                       ▼
              🤖 Groq API
                       │
                       ▼
                Llama Model
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

## Backend

* Python
* FastAPI
* Uvicorn
* Pydantic
* REST APIs

## AI

* Groq API
* Llama Models
* Prompt Engineering
* RAG

## Deployment

* Vercel — Frontend
* Render — Backend
* GitHub — Version Control

---

# 📂 Project Structure

```text
CodeMind/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── services/
│   ├── main.py
│   └── requirements.txt
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/IMMADIMANI/codemind.git

cd codemind
```

---

## 2. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

The frontend will run locally using the Vite development server.

---

## 3. Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

The FastAPI backend will be available locally.

---

# 🔑 Environment Variables

Create a `.env` file inside the `backend` directory:

```env
GROQ_API_KEY=your_groq_api_key
```

> ⚠️ Never commit your `.env` file or expose your API keys publicly.

---

# 📡 API Endpoints

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| `POST` | `/chat`       | AI Chat          |
| `POST` | `/analyze`    | Analyze Code     |
| `POST` | `/rag/search` | Search Documents |
| `GET`  | `/health`     | Health Check     |

---

# 🚀 Deployment

CodeMind is deployed using a modern cloud architecture.

### Frontend

**Vercel**

Live application:

👉 https://codemind-ai-assistant.vercel.app/

### Backend

**Render**

The FastAPI backend is deployed separately and communicates with the React frontend through REST APIs.

---

<img width="1903" height="897" alt="Screenshot 2026-08-07 143034" src="https://github.com/user-attachments/assets/95b92107-693c-4143-b2be-458abdfc1077" />
<img width="1165" height="722" alt="Screenshot 2026-08-07 234408" src="https://github.com/user-attachments/assets/39719e51-3ab3-4809-9cc2-2dc0737068fd" />

# 🔮 Future Improvements

* 🔐 User Authentication
* 💾 Persistent Chat History
* 📁 File & Code Upload
* 🐙 GitHub Repository Integration
* 🎙️ Voice Assistant
* 🧠 Multiple AI Models
* 🎨 Theme Customization
* 🐳 Docker Support
* 🧪 Automated Unit Testing
* ⚙️ CI/CD Pipeline
* 📊 Usage Analytics

---

# 🤝 Contributing

Contributions are welcome!

### 1. Fork the repository

### 2. Create a new branch

```bash
git checkout -b feature-name
```

### 3. Commit your changes

```bash
git add .
git commit -m "Add new feature"
```

### 4. Push your branch

```bash
git push origin feature-name
```

### 5. Open a Pull Request

---

# 👨‍💻 Author

## IMMADI MANIKANTA

🎓 B.Tech Computer Science & Engineering — VIT Vellore

🔗 **GitHub:** https://github.com/IMMADIMANI

🔗 **LinkedIn:** https://www.linkedin.com/in/manikanta-immadi-304059273/

---

# ⭐ Support

If you find CodeMind useful, consider giving the repository a ⭐ on GitHub!

---

## 💡 Built With

**React • Vite • FastAPI • Python • Groq • Llama • Vercel • Render**
