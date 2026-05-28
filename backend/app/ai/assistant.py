import os
import google.generativeai as genai

from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-1.5-flash"
)

def climate_assistant(question, climate_data):

    prompt = f"""
    You are a climate and space monitoring AI assistant.

    Analyze the following data:

    {climate_data}

    User question:
    {question}

    Generate:
    - climate insights
    - possible risks
    - recommendations
    - alerts if necessary

    Keep the answer concise.
    """

    response = model.generate_content(
        prompt
    )

    return response.text