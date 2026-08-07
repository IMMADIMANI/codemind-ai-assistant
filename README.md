# 🧠 CodeMind AI Assistant

> An AI-powered developer assistant designed to help with coding, debugging, APIs, documentation, and software engineering tasks.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.13-3776AB?logo=python\&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-API-009688?logo=fastapi\&logoColor=white)](https://fastapi.tiangolo.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)

## ✨ Overview

**CodeMind** is a full-stack AI developer assistant built to combine modern web development with AI engineering.

It provides a clean chat interface where developers can interact with an AI service for programming help, debugging, technical explanations, and development workflows.

The project is being built with a modular architecture so additional capabilities such as **RAG, document understanding, code analysis, and AI agents** can be added independently.

## 🚀 Current Features

* 💬 AI-powered developer chat
* 🧑‍💻 Programming and debugging assistance
* 🔌 REST API communication
* ⚡ FastAPI-based AI service
* 🎨 Modern React + TypeScript interface
* 🌙 Responsive dark developer workspace
* 🔐 Environment-based API configuration
* 🦙 Local LLM support through Ollama

## 🛠️ Tech Stack

**Frontend**

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React

**Backend / AI Service**

* Python
* FastAPI
* Pydantic
* Ollama
* Llama 3.2

**Development**

* Git
* GitHub
* REST APIs
* Environment variables

## 🏗️ Architecture

```text
┌──────────────────────┐
│   React + TypeScript │
│      Frontend        │
└──────────┬───────────┘
           │ REST API
           ▼
┌──────────────────────┐
│       FastAPI        │
│     AI Service       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Ollama / Llama 3.2 │
│      Local LLM       │
└──────────────────────┘
```

## 📁 Project Structure

```text
codemind-ai-assistant/
│
├── ai-service/          # Python FastAPI AI service
│   └── main.py
│
├── frontend/            # React + TypeScript application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── docs/                # Project documentation
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/IMMADIMANI/codemind-ai-assistant.git
cd codemind-ai-assistant
```

### 2. Start the AI service

```bash
cd ai-service
python -m venv venv
```

Activate the environment:

**Windows**

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install fastapi uvicorn requests
```

Start the service:

```bash
uvicorn main:app --reload
```

The API will run at:

```text
http://127.0.0.1:8000
```

### 3. Start the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown by Vite.

## 🔌 API

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "healthy"
}
```

### Chat

```http
POST /chat
```

Request:

```json
{
  "message": "Explain object-oriented programming"
}
```

The service forwards the request to the configured AI model and returns the generated response.

## 🧭 Roadmap

* [ ] Conversation history
* [ ] Streaming AI responses
* [ ] RAG with document ingestion
* [ ] FAISS vector search
* [ ] Codebase-aware question answering
* [ ] Document upload and analysis
* [ ] AI-powered code review
* [ ] Multi-agent workflows
* [ ] Authentication and user sessions
* [ ] Docker deployment
* [ ] Production deployment

## 🎯 Why CodeMind?

CodeMind is being developed as a practical AI engineering project rather than a simple chatbot.

The goal is to demonstrate experience across:

**Full-Stack Development • Python • AI/LLMs • REST APIs • RAG • Vector Search • Software Architecture • Git/GitHub**

## 👨‍💻 Author

**Immadi Manikanta**

B.Tech — Computer Science & Engineering

---

⭐ If you find the project interesting, consider starring the repository.
