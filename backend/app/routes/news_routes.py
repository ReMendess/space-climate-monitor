from fastapi import APIRouter

from app.services.news_scraper import get_space_news

router = APIRouter(
    prefix="/news",
    tags=["News"]
)

@router.get("/")
def news():
    return get_space_news()