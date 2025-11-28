from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt
import os
from sqlalchemy.orm import Session

import models
from models import User
from database import get_db
import schema
from Model import query  
router = APIRouter(
    prefix="/auth",
)

security = HTTPBearer()

ALG = "HS256"
SK = os.getenv("JWT_SECRET") or os.getenv("SK") or "JASDHEWD0128RU23R-32RU;LASD-WEPU130R9IEHWDIOSD1DE2BN"



@router.post("/register", response_model=schema.UserCreate)
def register(user: schema.UserCreate, db: Session = Depends(get_db)):
    new_user = User(username=user.username, password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user



@router.post("/login")
def login(form_data: schema.UserCreate, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.username == form_data.username).first()

    if not user or user.password != form_data.password:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    payload = {"username": user.username}

    token = jwt.encode(payload, key=SK, algorithm=ALG)

    return {"access_token": token}



def decode_token(token: str):
    try:
        return jwt.decode(token, SK, algorithms=[ALG])
    except Exception:
        return None


def verify_token(cred: HTTPAuthorizationCredentials = Depends(security)):
    token = cred.credentials
    decoded = decode_token(token)
    if decoded is None:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return decoded



@router.post("/predict")
def predict(
    message: schema.MessageBase,
    user : dict = Depends(verify_token),
    db: Session = Depends(get_db),
):
    result  = query(message.text)

    new_predict = models.User(
        text = message.text,
        prediction = result["score"]
    )
    db.add(new_predict)
    db.commit()          
    db.refresh(new_predict)

    return {
        "message": message.text,
        "prediction": result["score"],
        "sentiment" : result["sentiment"]
    }


@router.get("/get_prediction")
def get_all_predictions(db: Session = Depends(get_db)):
    return db.query(User).all()










