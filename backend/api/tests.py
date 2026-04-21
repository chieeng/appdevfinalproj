from django.test import TestCase
from django.contrib.auth.models import User
from .models import Listing, Booking, Conversation, Message


class ListingTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123'
        )
        self.listing = Listing.objects.create(
            title='Test Property',
            location='Test City',
            description='A test property',
            price=5000,
            bedrooms=3,
            bathrooms=2,
            status='available',
            owner=self.user
        )
    
    def test_listing_creation(self):
        self.assertEqual(self.listing.title, 'Test Property')
        self.assertEqual(self.listing.owner, self.user)
    
    def test_listing_str(self):
        self.assertEqual(str(self.listing), 'Test Property')


class BookingTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123'
        )
        self.owner = User.objects.create_user(
            username='owner',
            email='owner@example.com',
            password='ownerpass123'
        )
        self.listing = Listing.objects.create(
            title='Test Property',
            location='Test City',
            description='A test property',
            price=5000,
            bedrooms=3,
            bathrooms=2,
            owner=self.owner
        )
        self.booking = Booking.objects.create(
            user=self.user,
            listing=self.listing,
            move_in_date='2024-05-01',
            duration_months=3,
            total_price=15000
        )
    
    def test_booking_creation(self):
        self.assertEqual(self.booking.user, self.user)
        self.assertEqual(self.booking.listing, self.listing)
        self.assertEqual(self.booking.status, 'pending')
