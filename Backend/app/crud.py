# backend/app/crud.py

from sqlalchemy.orm import Session
from .models import Team, TeamMember, Student

def create_team(db: Session, name: str):
    db_team = Team(name=name)
    db.add(db_team)
    db.commit()
    db.refresh(db_team)
    return db_team

def create_team_member(db: Session, team_id: int, name: str, position: str):
    db_member = TeamMember(name=name, position=position, team_id=team_id)
    db.add(db_member)
    db.commit()
    db.refresh(db_member)
    return db_member

def create_student(db: Session, first_name: str, last_name: str, email: str, phone_number: str):
    db_student = Student(first_name=first_name, last_name=last_name, email=email, phone_number=phone_number)
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

def get_student(db: Session, student_id: int):
    return db.query(Student).filter(Student.id == student_id).first()

def get_students(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Student).offset(skip).limit(limit).all()


