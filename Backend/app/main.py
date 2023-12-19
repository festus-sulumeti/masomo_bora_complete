# backend/app/main.py

# from fastapi import FastAPI, HTTPException, Depends
# from sqlalchemy.orm import Session
# from Backend.app import crud
# from Backend.app.database import engine, SessionLocal
# from Backend.app import models

# app = FastAPI()

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from Backend.app import crud
from Backend.app.database import engine, SessionLocal
from Backend.app import models

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost",
    "http://localhost:3000",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# # Example route for the root
# @app.get("/")
# def read_root():
#     return {"message": "Hello, Masomo Bora!"}


# Route for ManageTeam
@app.get("/Home/ManageTeam")
def read_team_info(db: Session = Depends(get_db)):
    # Fetch team information from the database
    

    # Example: Get a list of teams from the database
    teams = crud.get_teams(db)

    # Process the data as needed
    team_data = [{"id": team.id, "name": team.name} for team in teams]

    # Return the processed data
    return {"team_data": team_data}

# Route to create a new student
@app.post("/students/", response_model=None)
def create_student(student_data: dict, db: Session = Depends(get_db)):
    return crud.create_student(db=db, **student_data)

@app.get("/Home/StudentForm")
def read_student_form(db: Session = Depends(get_db)):
    # Fetch student form information from the database
    

    # Example: Get a list of students from the database
    students = crud.get_students(db)

    # Process the data as needed
    student_data = [{"id": student.id, "name": f"{student.first_name} {student.last_name}"} for student in students]

    # Return the processed data
    return {"student_data": student_data}


