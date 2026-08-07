import os

import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="CodeMind AI Service")

# Frontend URLs
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def root():
    return {
        "message": "CodeMind AI Service is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/chat")
def chat(request: ChatRequest):

    prompt = f"""
You are CodeMind AI, an expert software engineering assistant.

You help users with:
- Python
- Java
- Spring Boot
- React
- JavaScript
- TypeScript
- SQL
- Machine Learning
- AI
- Git
- REST APIs
- Debugging
- Data Structures and Algorithms
- Software Engineering

Always provide clear, accurate and professional answers.

User:
{request.message}
"""

    ollama_url = os.getenv(
        "OLLAMA_URL",
        "http://localhost:11434/api/generate"
    )

    response = requests.post(
        ollama_url,
        json={
            "model": "llama3.2",
            "prompt": prompt,
            "stream": False,
        },
        timeout=120,
    )

    response.raise_for_status()

    result = response.json()

    return {
        "response": result.get(
            "response",
            "Sorry, I couldn't generate a response."
        )
    }