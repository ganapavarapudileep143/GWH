# tests/test_todo_api.py

import pytest
from rest_framework.test import APIClient
from django.urls import reverse
from apps.todo.models import Todo

@pytest.mark.django_db
def test_create_todo():
    client = APIClient()
    url = reverse('todo_list_create')
    data = {
        "title": "Test Todo",
        "description": "This is a test.",
        "due_date": "2025-05-01",
        "status": "new"
    }
    response = client.post(url, data, format='json')
    assert response.status_code == 201
    assert Todo.objects.filter(title="Test Todo").exists()

@pytest.mark.django_db
def test_get_todos():
    client = APIClient()
    # Create a sample todo in the db.
    Todo.objects.create(title="Existing Todo", status="new")
    url = reverse('todo_list_create')
    response = client.get(url)
    assert response.status_code == 200
    todos = response.json()
    assert isinstance(todos, list)
    assert len(todos) > 0
