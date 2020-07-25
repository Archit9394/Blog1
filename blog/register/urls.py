from django.urls import path
from .views import UserAPIView
urlpatterns = [

    path('register/', UserAPIView.as_view()),
    path('register/<int:pk>',UserAPIView.as_view()),
]
