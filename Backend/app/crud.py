# backend/app/crud.py

from sqlalchemy.orm import Session
from .models import Team, TeamMember

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
