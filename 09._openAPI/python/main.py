import fastapi
from routers import spacecraft_router, users_router

app = fastapi.FastAPI()

app.include_router(spacecraft_router)
app.include_router(users_router)

