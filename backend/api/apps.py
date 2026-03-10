from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        # This code runs when the app starts
        import os
        if os.environ.get('RUN_MAIN') != 'true':  # Avoid running twice in local dev
            from django.contrib.auth import get_user_model
            try:
                User = get_user_model()
                username = 'Dhanush'
                email = ''
                password = 'Password@123'
                
                if not User.objects.filter(username=username).exists():
                    User.objects.create_superuser(username, email, password)
                    print(f"Superuser '{username}' created successfully.")
            except Exception as e:
                print(f"Could not create superuser: {e}")
