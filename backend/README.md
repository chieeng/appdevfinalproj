# Boarding House Backend - Django

A Django REST Framework backend for the Boarding House booking application. This server handles user authentication, listings, bookings, and messaging between users and property owners.

## Prerequisites

- Python 3.8+
- MySQL Server 5.7+
- pip (Python package manager)

## Installation

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Setup MySQL Database

Create a MySQL database for the project:

```sql
CREATE DATABASE boarding_house_db;
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and update with your settings:

```bash
cp .env.example .env
```

Edit `.env`:
```
DB_NAME=boarding_house_db
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_PORT=3306
```

### 4. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Create Superuser (Admin Account)

```bash
python manage.py createsuperuser
```

Follow the prompts to create an admin account.

### 6. (Optional) Load Sample Data

```bash
python manage.py loaddata initial_data  # If you have a fixtures file
```

## Running the Server

Start the development server:

```bash
python manage.py runserver
```

The server will be available at: `http://localhost:8000`

### API Endpoints

- **Admin Dashboard**: `http://localhost:8000/admin`
- **API Root**: `http://localhost:8000/api/`
- **Users**: `http://localhost:8000/api/users/`
- **Listings**: `http://localhost:8000/api/listings/`
- **Bookings**: `http://localhost:8000/api/bookings/`
- **Conversations**: `http://localhost:8000/api/conversations/`

## API Documentation

### Authentication

This API uses session authentication. Users can register and login via standard HTTP endpoints.

### Key Endpoints

#### Users
- `GET /api/users/` - List all users
- `GET /api/users/me/` - Get current user info
- `POST /api/users/` - Register new user

#### Listings
- `GET /api/listings/` - List all listings
- `POST /api/listings/` - Create new listing (owners only)
- `GET /api/listings/my_listings/` - Get listings by current user
- `GET /api/listings/{id}/` - Get listing details

#### Bookings
- `GET /api/bookings/` - Get user's bookings
- `POST /api/bookings/` - Create new booking
- `GET /api/bookings/my_bookings/` - Get all user bookings

#### Conversations
- `GET /api/conversations/` - Get user's conversations
- `POST /api/conversations/start_conversation/` - Start new conversation
- `POST /api/conversations/{id}/send_message/` - Send message in conversation

## Database Schema

### Models

1. **User** (Django built-in)
   - Extended with email and name fields

2. **Listing**
   - title, location, description, price
   - bedrooms, bathrooms, status
   - amenities (JSON), owner (FK to User)

3. **Booking**
   - user (FK), listing (FK)
   - move_in_date, duration_months, total_price
   - status (pending, confirmed, cancelled)

4. **Conversation**
   - user (FK), listing (FK)
   - Unique constraint on (user, listing) to prevent duplicates

5. **Message**
   - conversation (FK), sender, text, timestamp

## Development

### Update Requirements

After installing new packages:

```bash
pip freeze > requirements.txt
```

### Access Django Admin

Go to `http://localhost:8000/admin` and login with your superuser credentials.

## Troubleshooting

### MySQL Connection Error

Ensure MySQL is running and your `.env` credentials are correct:

```bash
mysql -u root -p
```

### Port Already in Use

To use a different port:

```bash
python manage.py runserver 8001
```

### Permission Denied

On Linux/Mac, you may need to make `manage.py` executable:

```bash
chmod +x manage.py
```

## Frontend Integration

The React frontend should be configured to use this API at `http://localhost:8000/api/`

Update your React API calls to use the Django endpoints instead of localStorage.

## Production Deployment

Before deploying to production:

1. Set `DEBUG = False` in settings.py
2. Update `ALLOWED_HOSTS` with your domain
3. Generate a new `SECRET_KEY`
4. Use a production-grade database (PostgreSQL recommended)
5. Use a production WSGI server (Gunicorn, uWSGI)
6. Configure proper CORS settings

## License

This project is part of the Boarding House Booking Application.
