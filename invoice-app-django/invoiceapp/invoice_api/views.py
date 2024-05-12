from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, status

# Create your views here.
class InvoiceList(generics.GenericAPIView):
    def get(self, request):
        return Response({})
    
    def post(self, request):
        return Response({})
    
    def patch(self, request):
        return Response({})
    
    def delete(self, request):
        return Response({})

class InvoiceItem(generics.GenericAPIView):
    def get(self, request):
        return Response({})
    
    def post(self, request):
        return Response({})
    
    def patch(self, request):
        return Response({})
    
    def delete(self, request):
        return Response({})