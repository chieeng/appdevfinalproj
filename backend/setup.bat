@echo off
REM Django Backend Setup Script for Windows

echo.
echo ========================================
echo Boarding House Django Backend Setup
echo ========================================
echo.

REM Create virtual environment
echo Creating virtual environment...
python -m venv venv

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate.bat

REM Install dependencies
echo Installing dependencies...
pip install -r requirements.txt

REM Create .env file
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
    echo Please edit .env with your MySQL credentials!
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Edit .env with your MySQL database credentials
echo 2. Run: python manage.py migrate
echo 3. Run: python manage.py createsuperuser
echo 4. Run: python manage.py runserver
echo.
echo Admin panel: http://localhost:8000/admin
echo API root: http://localhost:8000/api/
echo.
pause
