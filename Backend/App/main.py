import json
from fastapi import FastAPI,Depends
# import jwt
from sqlalchemy.orm import Session
import models
import schema
from database import engine, get_db ,Base,SessionLocal
import autho
from Model import query


from fastapi.middleware.cors import CORSMiddleware




Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],   
)

app.include_router(autho.router)