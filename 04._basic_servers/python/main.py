from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"Hello": "World"}

@app.get("/newroute")
def _():
    return {"Second": "Route"}

@app.get("/route3")
def _():
    return {"Third": "Route"}