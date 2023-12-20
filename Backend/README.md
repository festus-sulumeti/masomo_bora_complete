
## Masomo Bora Backend
## Overview
Masomo Bora Backend is the server-side component of the Masomo Bora application, responsible for managing data related to teams, team members, and students. Built with FastAPI and SQLAlchemy, it provides a robust backend to support the frontend user interface.

## Key Components
1. alembic.ini and alembic/
Purpose: Contains configurations for Alembic, a database migration tool.
2. crud.py
Purpose: Defines CRUD (Create, Read, Update, Delete) operations for database entities like teams, team members, and students.
3. database.py
Purpose: Establishes the database connection and initializes SQLAlchemy.
4. main.py
Purpose: Configures the FastAPI application, defines routes, and handles dependencies such as the database session.
5. models.py
Purpose: Defines the data models for SQLAlchemy, including the Student, Team, and TeamMember entities.
Database Migrations
Purpose: Handles database schema changes using Alembic migrations.

To run migrations offline:

alembic revision --autogenerate -m "Your migration message"
alembic upgrade head

## To run migrations online:


alembic upgrade head
CRUD Operations
1. crud.py
- create_team
Purpose: Create a new team in the database.
- create_team_member
Purpose: Create a new team member associated with a team in the database.
- create_student
Purpose: Create a new student in the database.
- get_student
Purpose: Retrieve a student by ID from the database.
- get_students
Purpose: Retrieve a list of students from the database with optional skip and limit parameters.
2. main.py
- /Home/ManageTeam
Purpose: Endpoint to fetch team information from the database.
- /students/
Purpose: Endpoint to create a new student in the database.
- /Home/StudentForm
Purpose: Endpoint to fetch student information from the database.

## How to Use
Set up a PostgreSQL database and update the DATABASE_URL in database.py accordingly.
Run Alembic migrations to initialize the database schema.
Start the FastAPI application using uvicorn main:app --reload.



## Backend Setup:

1. Install Dependencies:

# Inside the backend directory
pip install fastapi[all] sqlalchemy databases alembic psycopg2-binary

pip install asyncpg

activate the .env file within your project directory, here's a step-by-step guide:

project structure is like this:

project
|-- backend
|   |-- .env
|   |-- ...
|-- frontend
|   |-- ...
|-- docker-compose.yml
|-- .gitignore
|-- ...
Here's how you can activate the .env file:

Open a terminal.

Navigate to your project directory:
cd /Masomo_bora_complete
Navigate to the backend directory:


cd backend
Activate the .env file using the source command:


source .env
Or, you can use the shorthand . to achieve the same:

. .env

alembic init alembic
Generate Alembic Configuration:

In your Backend directory, generate an Alembic configuration file using the following command:


alembic init alembic
This will create an alembic directory with the necessary files, including alembic.ini.

Update alembic.ini:

Open the generated alembic.ini file in a text editor.

Update the sqlalchemy.url setting in the [alembic] section to match your PostgreSQL database connection URL. It should be similar to the DATABASE_URL in your .env file.

Example:

ini

sqlalchemy.url = postgresql://user:password@localhost/masomo
Run Migration Again:

After updating the configuration file, try running the migration command again:

alembic upgrade head
This should apply the database migrations and create the necessary tables.

## Running the Application:
Start FastAPI Backend:

uvicorn Backend.app.main:app --reload
