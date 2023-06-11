from fastapi import FastAPI
from datetime import datetime
import requests

app = FastAPI()

@app.get("/greeting")
def get_greeting():
    return {"data": "Hello from python FastApi"}

@app.get("/getGreetingFromExpress")
def get_greeting_express():
    response = requests.get("http://127.0.0.1:3000/greeting")
    greeting = response.json()
    return greeting

