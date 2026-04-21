from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ListingViewSet, BookingViewSet, ConversationViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'listings', ListingViewSet)
router.register(r'bookings', BookingViewSet, basename='booking')
router.register(r'conversations', ConversationViewSet, basename='conversation')

urlpatterns = [
    path('', include(router.urls)),
]
