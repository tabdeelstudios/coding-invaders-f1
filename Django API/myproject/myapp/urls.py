from django.urls import path
from .views import Notes, NoteDetail, login_view, logout_view, signup_view

urlpatterns = [
    path('login', login_view),
    path('logout', logout_view),
    path('signup', signup_view),
    path('', Notes.as_view()),
    path('<str:pk>', NoteDetail.as_view())
]
