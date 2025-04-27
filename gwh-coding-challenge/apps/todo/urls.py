from django.urls import path
from .views import todo_list_create

urlpatterns = [
    path('', todo_list_create, name='todo_list_create'),
]
