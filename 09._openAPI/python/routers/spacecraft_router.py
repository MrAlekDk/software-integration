from fastapi import APIRouter, Query
from pydantic import BaseModel

router = APIRouter(tags=["Spacecrafts"])

spacecrafts = {
    0:{"id": 1, "name": "Voyager 1"},
    1:{"id": 2, "name": "Voyager 2"},
    2:{"id": 3, "name": "Cassini"},
    3:{"id": 4, "name": "Pioneer 10"},
    4:{"id": 5, "name": "Pioneer 11"}
}

class Spacecraft(BaseModel):
    id: int 
    name: str

@router.get("/spacecrafts")
def get_spacecrafts():
    return spacecrafts

@router.get("/spacecrafts/{spacecraft_id}")
def get_spacecraft(spacecraft_id: int, q: str = Query("ds", min_length=3, max_length=5)):
    print(q)
    return {"spacecraft_id": spacecrafts.get(spacecraft_id-1)}


@router.post("/spacecrafts")
def add_spacecraft(spacecraft: Spacecraft):
    spacecrafts[len(spacecrafts)] = spacecraft
    return spacecraft

