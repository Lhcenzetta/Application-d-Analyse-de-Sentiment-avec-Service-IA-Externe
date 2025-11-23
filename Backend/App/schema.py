from models import User
from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str

class MessageBase(BaseModel):
    text : str

class UserRead(BaseModel):
    id: int
    username: str
    prediction : float

# class UserToken(BaseModel):
#     Token : str
    class Config:
        orm_mode = True