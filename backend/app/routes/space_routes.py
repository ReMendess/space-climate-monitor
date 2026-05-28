from fastapi import APIRouter

from app.services.nasa_service import (
    get_apod,
    get_earth_images
)

router = APIRouter(
    prefix="/space",
    tags=["Space"]
)

@router.get("/apod")
def apod():
    return get_apod()


@router.get("/earth-images")
def earth_images():
    return get_earth_images()