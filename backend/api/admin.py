from django.contrib import admin
from .models import Listing, Booking, Conversation, Message


@admin.register(Listing)
class ListingAdmin(admin.ModelAdmin):
    list_display = ['title', 'location', 'price', 'status', 'owner']
    list_filter = ['status', 'created_at']
    search_fields = ['title', 'location']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['user', 'listing', 'move_in_date', 'status', 'total_price']
    list_filter = ['status', 'created_at']
    search_fields = ['user__email', 'listing__title']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Conversation)
class ConversationAdmin(admin.ModelAdmin):
    list_display = ['user', 'listing', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['user__email', 'listing__title']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ['conversation', 'sender', 'created_at']
    list_filter = ['sender', 'created_at']
    search_fields = ['conversation__listing__title', 'text']
    readonly_fields = ['created_at']
