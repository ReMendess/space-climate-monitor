import os

from dotenv import load_dotenv

load_dotenv()

def climate_assistant(question, climate_data):
    api_key = os.getenv("GEMINI_API_KEY")

    if not api_key:
        return (
            "GEMINI_API_KEY não configurada no backend. "
            "Defina a variável no `.env` e reinicie o servidor."
        )

    try:
        import google.generativeai as genai
    except Exception:
        return (
            "Dependência ausente: `google-generativeai`. "
            "Instale as dependências do backend e reinicie o servidor."
        )

    genai.configure(api_key=api_key)
    model_name = os.getenv("GEMINI_MODEL", "GEMINI_MODEL")
    model = genai.GenerativeModel(model_name)

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

    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return (
            "Falha ao gerar resposta no provedor de IA. "
            "Verifique `GEMINI_MODEL` e permissões/chave da API. "
            f"Detalhes: {e}"
        )