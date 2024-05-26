from django.http import HttpResponse
from django.contrib.auth.decorators import login_required, user_passes_test

@login_required
def view1(request):
    return HttpResponse('View 1 : Accessible by all logged in users')

@login_required
@user_passes_test(lambda u:u.is_superuser)
def view2(request):
    return HttpResponse('View 2 : Accessible by admin only')

def view3(request):
    return HttpResponse('View 3 : Accessible by everyone without logging in')
