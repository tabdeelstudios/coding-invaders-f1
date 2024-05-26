from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Create an admin and a normal user'

    def handle(self, *args, **kwargs):
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser('admin', 'admin@example.com', 'adminpassword')
            self.stdout.write(self.style.SUCCESS('Successfully created Admin!'))

        if not User.objects.filter(username='normaluser').exists():
            User.objects.create_user('normaluser', 'user@example.com', 'userpassword')
            self.stdout.write(self.style.SUCCESS('Successfully created normal user!'))
        