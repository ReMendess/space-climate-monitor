import requests
import os
from dotenv import load_dotenv

load_dotenv()

NASA_API_KEY = os.getenv("NASA_API_KEY")

BASE_URL = "https://api.nasa.gov"

def get_apod():

    url = f"{BASE_URL}/planetary/apod"

    params = {
        "api_key": NASA_API_KEY
    }

    response = requests.get(url, params=params)

    return response.json()


def get_earth_images():

    url = f"{BASE_URL}/EPIC/api/natural/images"

    params = {
        "api_key": NASA_API_KEY
    }

    response = requests.get(url, params=params)

    return response.json()