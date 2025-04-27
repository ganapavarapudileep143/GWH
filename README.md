# GWH Coding Challenge 
A full-stack Todo management application built with a **Django REST API** and a **React/Redux** frontend. It showcases basic Create and Read operations for managing tasks.

The **backend** is a Django project that uses Django REST Framework (DRF) to create API endpoints. A `Todo` model stores task details like title, description, due date, and status (New, In Progress, Done). CORS is configured using `django-cors-headers` to enable communication with the frontend. Setup includes creating a virtual environment, installing dependencies, applying migrations, and running the server at `http://localhost:8000/api/todos/`.

The **frontend** is a React application enhanced with Redux for state management and Reactstrap for responsive UI components. It allows users to view and add Todos using forms validated by **Formik** and **Yup**, with Axios handling API calls. Setup involves installing npm packages and starting the app at `http://localhost:3000`.

Key features include:
- RESTful API development
- Input validation and error handling
- Testing backend with **pytest**
- Linting Python code using **ruff**
- Dynamic, validated forms on the frontend
- Responsive UI built with Reactstrap


