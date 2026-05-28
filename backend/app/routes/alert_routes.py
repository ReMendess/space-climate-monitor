from fastapi import APIRouter

from app.services.alert_service import (
    generate_alerts
)

router = APIRouter(
    prefix="/alerts",
    tags=["Alerts"]
)

@router.get("/")

def alerts():

    climate_data = {
        "temperature": 42,
        "fire_risk": "High",
        "solar_activity": "Moderate"
    }

    result = generate_alerts(
        climate_data
    )

    return result