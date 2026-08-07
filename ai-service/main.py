import os
import requests

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="CodeMind AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def root():
    return {"message": "CodeMind AI Service is running"}


@app.get("/health")
def health():
    return {"status": "healthy"}


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

Always answer clearly, accurately and professionally.

User:
{request.message}
"""

    # Production: Groq
    groq_key = os.getenv("GROQ_API_KEY")

    if groq_key:
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {groq_key}",
                "Content-Type": "application/json",
            },
            json={
                "model": "llama-3.3-70b-versatile",
                "messages": [
                    {
                        "role": "user",
                        "content": prompt,
                    }
                ],
                "temperature": 0.3,
            },
            timeout=120,
        )

        response.raise_for_status()

        result = response.json()

        return {
            "response": result["choices"][0]["message"]["content"]
        }

    # Local development: Ollama
    response = requests.post(
        os.getenv(
            "OLLAMA_URL",
            "http://localhost:11434/api/generate",
        ),
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
            "Sorry, I couldn't generate a response.",
        )
    }