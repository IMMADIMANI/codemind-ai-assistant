from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

app = FastAPI(title="CodeMind AI Service")

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
    return {"message": "CodeMind AI Service is running"}


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.post("/chat")
def chat(request: ChatRequest):
    prompt = f"""
You are CodeMind AI.

You are an expert software engineer.

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
- APIs
- Debugging
- DSA

Always answer professionally and clearly.

User:
{request.message}
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3.2",
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()

    return {
        "response": result["response"]
    }