from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

@api_view(['GET', 'POST'])
def todo_list_create(request):
    """
    GET: Return a list of all Todos.
    POST: Create a new Todo.
    """
    if request.method == 'GET':
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # Return error details for invalid input
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
