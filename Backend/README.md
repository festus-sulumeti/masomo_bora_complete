## Backend Setup:

1. Install Dependencies:

# Inside the backend directory
pip install fastapi[all] sqlalchemy databases alembic psycopg2-binary

pip install asyncpg

## Running the Application:
Start FastAPI Backend:

uvicorn backend.app.main:app --reload
