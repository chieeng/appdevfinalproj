from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from django.contrib.auth.models import User
from .models import Listing, Booking, Conversation, Message
from .serializers import (
    UserSerializer, ListingSerializer, BookingSerializer, 
    ConversationSerializer, MessageSerializer
)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    @action(detail=False, methods=['get'])
    def me(self, request):
        """Get current user info"""
        if not request.user.is_authenticated:
            return Response({'error': 'Not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)
        
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)


class ListingViewSet(viewsets.ModelViewSet):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    @action(detail=False, methods=['get'])
    def my_listings(self, request):
        """Get listings owned by current user"""
        listings = Listing.objects.filter(owner=request.user)
        serializer = self.get_serializer(listings, many=True)
        return Response(serializer.data)


class BookingViewSet(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Return bookings for current user"""
        return Booking.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def my_bookings(self, request):
        """Get all bookings for current user"""
        bookings = self.get_queryset()
        serializer = self.get_serializer(bookings, many=True)
        return Response(serializer.data)


class ConversationViewSet(viewsets.ModelViewSet):
    serializer_class = ConversationSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Return conversations for current user"""
        return Conversation.objects.filter(user=self.request.user)
    
    @action(detail=False, methods=['post'])
    def start_conversation(self, request):
        """Start or get existing conversation with a listing owner"""
        listing_id = request.data.get('listing_id')
        
        if not listing_id:
            return Response({'error': 'listing_id is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            listing = Listing.objects.get(id=listing_id)
        except Listing.DoesNotExist:
            return Response({'error': 'Listing not found'}, status=status.HTTP_404_NOT_FOUND)
        
        conversation, created = Conversation.objects.get_or_create(
            user=request.user,
            listing=listing
        )
        
        serializer = self.get_serializer(conversation)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)
    
    @action(detail=True, methods=['post'])
    def send_message(self, request, pk=None):
        """Send a message in a conversation"""
        conversation = self.get_object()
        text = request.data.get('text')
        
        if not text:
            return Response({'error': 'text is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        message = Message.objects.create(
            conversation=conversation,
            sender='user' if request.user == conversation.user else 'owner',
            text=text
        )
        
        serializer = MessageSerializer(message)
        conversation.save()  # Update the updated_at timestamp
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
