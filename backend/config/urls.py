"""
URL configuration for config project.
"""
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({
        'message': 'Boarding House API',
        'version': '1.0',
        'endpoints': {
            'api': '/api/',
            'admin': '/admin/',
            'users': '/api/users/',
            'listings': '/api/listings/',
            'bookings': '/api/bookings/',
            'conversations': '/api/conversations/',
        }
    })

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
