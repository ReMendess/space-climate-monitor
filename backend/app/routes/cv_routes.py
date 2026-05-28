from fastapi import (
    APIRouter,
    UploadFile,
    File
)

import shutil
import uuid

from app.cv.image_detector import (
    detect_environment_areas
)

router = APIRouter(
    prefix="/cv",
    tags=["Computer Vision"]
)

UPLOAD_FOLDER = "app/cv/uploads"

@router.post("/analyze")

async def analyze_image(
    file: UploadFile = File(...)
):

    filename = f"{uuid.uuid4()}.jpg"

    filepath = f"{UPLOAD_FOLDER}/{filename}"

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    result = detect_environment_areas(
        filepath
    )

    return result