# 🚀 CodeMind - AI Developer Assistant

> An AI-powered developer workspace that helps developers write, debug, analyze, and understand code using Groq's ultra-fast Llama models.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/Frontend-React%20+%20Vite-61DAFB)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688)
![Groq](https://img.shields.io/badge/AI-Groq-orange)
![Deployment](https://img.shields.io/badge/Deployment-Vercel%20%7C%20Render-success)

---

## 🌐 Live Demo

**Frontend:** https://your-vercel-url.vercel.app

**Backend API:** https://your-render-url.onrender.com

---

# 📖 Overview

CodeMind is an AI-powered developer assistant designed to improve coding productivity.

It allows developers to:
<img width="1600" height="754" alt="WhatsApp Image 2026-08-07 at 14 31 03" src="https://github.com/user-attachments/assets/ddc9597c-2a93-4c9d-b13e-0e81442d470f" />
- 💬 Chat with AI for programming help
- 🔍 Analyze and explain code
- 🐞 Debug errors
- 📝 Generate documentation
- 📂 Search project knowledge using RAG
- ⚡ Get fast AI responses powered by Groq Llama

The project is built with a modern full-stack architecture using React, FastAPI, and Groq AI.

---

# ✨ Features
<img width="1600" height="754" alt="WhatsApp Image 2026-08-07 at 14 31 03" src="https://github.com/user-attachments/assets/f0463145-0d8c-4243-a431-97897ffbd8da" />
<img width="1600" height="754" alt="WhatsApp Image 2026-08-07 at 14 31 03" src="https://github.com/user-attachments/assets/9502487d-1eb5-4987-b6cd-f03afb93c613" />
- 🤖 AI Chat Assistant
- 🧠 Code Analysis
- 🐞 Bug Detection
- 📄 Documentation Generator
- 📂 RAG Search
- ⚡ Ultra Fast AI Responses
- 🌙 Modern Dark UI
- 📱 Responsive Design
- 🔒 Secure API Integration
- ☁️ Fully Cloud Deployed

---

# 🏗️ Architecture

```
                 🌐 Vercel
                     │
                     ▼
            React + Vite Frontend
                     │
          REST API (Axios/Fetch)
                     │
                     ▼
              FastAPI Backend
                     │
          Prompt Engineering Layer
                     │
                     ▼
             Groq Llama AI Model
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3

## Backend

- FastAPI
- Python
- Uvicorn
- Pydantic

## AI

- Groq API
- Llama Model

## Deployment

- Frontend → Vercel
- Backend → Render

---

# 📂 Project Structure

```
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

## Clone Repository

```bash
git clone https://github.com/yourusername/codemind.git

cd codemind
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=your_groq_api_key
```

---

# 🚀 Deployment

## Frontend

- Hosted on **Vercel**

## Backend

- Hosted on **Render**

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/chat` | AI Chat |
| POST | `/analyze` | Analyze Code |
| POST | `/rag/search` | Search Documents |
| GET | `/health` | Health Check |

---

# 📸 Screenshots

## 🏠 Home Dashboard

![Dashboard](screenshots/dashboard.png)

---

## 💬 AI Coding Assistant

![AI Chat](screenshots/chat.png)

---

## 🧠 Code Analysis

![Analysis](screenshots/analysis.png)

---

# 🔮 Future Improvements

- Voice Assistant
- Multiple AI Models
- Authentication
- Chat History
- File Upload
- GitHub Integration
- Theme Customization
- Docker Support
- Unit Testing
- CI/CD Pipeline

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Your Name**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---

## 💡 Built With

- React
- FastAPI
- Groq
- Llama
- Vercel
- Render
