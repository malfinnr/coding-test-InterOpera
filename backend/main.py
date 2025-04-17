from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import json
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load dummy data
with open("dummyData.json", "r") as f:
    DUMMY_DATA = json.load(f)

@app.get("/api/data")
def get_data():
    """
    Returns dummy data (e.g., list of users).
    """
    return DUMMY_DATA

# Load mock Q&A pairs
QA_LOG_PATH = "mockqa.json"
if os.path.exists(QA_LOG_PATH):
    with open(QA_LOG_PATH, "r") as f:
        MOCK_QA = json.load(f)
else:
    MOCK_QA = []

@app.post("/api/ai")
async def ai_endpoint(request: Request):
    body = await request.json()
    user_question = body.get("question", "").lower()

  
    for pair in MOCK_QA:
        if pair["question"].lower() in user_question or user_question in pair["question"].lower():
            return {"answer": pair["answer"]}

  
    return {"answer": f"Sorry, I don't have an answer for: '{user_question}'"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)