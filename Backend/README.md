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
