# GWH Coding Challenge - Backend (Django)

This is the backend API for the Todo application, built with Django and Django REST Framework.

## Setup

1.  **Clone the repository (or setup the project):**
    ```bash
    # If you cloned a repo containing this structure:
    # git clone <your-repo-url>
    # cd gwh-coding-challenge
    # Otherwise, follow the manual setup steps outlined previously.
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    # On Windows:
    # venv\Scripts\activate
    # On macOS/Linux:
    # source venv/bin/activate
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Apply database migrations:**
    ```bash
    python manage.py makemigrations todo
    python manage.py migrate
    ```

## Running the Development Server

```bash
python manage.py runserver
```