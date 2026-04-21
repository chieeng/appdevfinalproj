#!/bin/bash

# Django Backend Setup Script for macOS/Linux

echo ""
echo "========================================"
echo "Boarding House Django Backend Setup"
echo "========================================"
echo ""

# Create virtual environment
echo "Creating virtual environment..."
python3 -m venv venv

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "Installing dependencies..."
pip install -r requirements.txt

# Create .env file
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp .env.example .env
    echo "Please edit .env with your MySQL credentials!"
fi

echo ""
echo "========================================"
echo "Setup Complete!"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Edit .env with your MySQL database credentials"
echo "2. Run: python manage.py migrate"
echo "3. Run: python manage.py createsuperuser"
echo "4. Run: python manage.py runserver"
echo ""
echo "Admin panel: http://localhost:8000/admin"
echo "API root: http://localhost:8000/api/"
echo ""
