from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.space_routes import router as space_router
from app.routes.news_routes import router as news_router

from fastapi.staticfiles import StaticFiles
from app.routes.cv_routes import router as cv_router

from app.routes.ai_routes import router as ai_router
from app.routes.alert_routes import router as alert_router



app = FastAPI(
    title="Space Climate Monitor"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(space_router)
app.include_router(news_router)
app.include_router(cv_router)
app.include_router(ai_router)
app.include_router(alert_router)

app.mount(
    "/uploads",
    StaticFiles(directory="app/cv/uploads"),
    name="uploads"
)

@app.get("/")
def home():
    return {
        "project": "Space Climate Monitor",
        "status": "online"
    }