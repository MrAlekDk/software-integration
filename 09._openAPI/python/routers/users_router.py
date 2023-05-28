from fastapi import APIRouter, Query
from pydantic import BaseModel

router = APIRouter(tags=["Users"])

users = {
    0:{"id": 1, "name": "John"},
    1:{"id": 2, "name": "Jane"},
    2:{"id": 3, "name": "Jack"},
    3:{"id": 4, "name": "Jill"},
    4:{"id": 5, "name": "Joe"}
}

class User(BaseModel):
    id: int 
    name: str

@router.get("/users")
def get_users():
    return users

@router.get("/users/{user_id}")
def get_user(user_id: int, q: str = Query("", min_length=3, max_length=50)):
    return {"user_id": users.get(user_id-1)}

@router.post("/users")
def add_user(user: User):
    users[len(users)] = user
    return user
