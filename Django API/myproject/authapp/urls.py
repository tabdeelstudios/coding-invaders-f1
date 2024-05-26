from django.urls import path

from .views import view1, view2, view3

urlpatterns = [
    path('view1/', view1, name='view1'),
    path('view2/', view2, name='view2'),
    path('view3/', view3, name='view3')
]