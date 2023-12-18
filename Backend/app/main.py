# backend/app/main.py

from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from Backend.app import crud  # Adjust the import statement
from Backend.app.database import engine, SessionLocal
from Backend.app import models  # Adjust the import statement

app = FastAPI()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
