from fastapi import APIRouter

from pydantic import BaseModel

from app.ai.assistant import (
    climate_assistant
)

router = APIRouter(
    prefix="/ai",
    tags=["AI Assistant"]
)

class QuestionRequest(BaseModel):
    question: str

@router.post("/chat")

def chat(data: QuestionRequest):

    climate_data = {
        "solar_activity": "Moderate",
        "temperature": 35,
        "fire_risk": "Medium",
        "vegetation_index": 72
    }

    response = climate_assistant(
        data.question,
        climate_data
    )

    return {
        "response": response
    }