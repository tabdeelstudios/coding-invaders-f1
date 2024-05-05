from rest_framework.response import Response
from rest_framework import status, generics
from .models import NoteModel
from .serializers import NoteSerializer
from datetime import datetime
import pymongo
# for authentication
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from .models import User
from .serializers import UserSerializer

client = pymongo.MongoClient("")
dbname = client['notes']
collection = dbname['user_notes']

sample_note = {
    "title":"Sample Note",
    "description":"This is a sample note"
}

# collection.insert_one(sample_note)

allNotes = collection.find({})

for note in allNotes:
    print(note['title'])


@api_view(['POST'])
@csrf_exempt
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(request, email=email, password=password)
    if user is not None:
        login(request, user)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    else:
        return Response({'error':'Invalid Email or Password'}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
@csrf_exempt
def logout_view(request):
    logout(request)
    return Response({'success':'Logged out successfully!'})

@api_view(['POST'])
@csrf_exempt
def signup_view(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class Notes(generics.GenericAPIView):
    serializer_class = NoteSerializer
    queryset = NoteModel.objects.all()

    def get(self, request):
        notes = NoteModel.objects.all()
        serializer = self.serializer_class(notes, many=True)
        return Response({
            "notes":serializer.data
        })

    def post(self, request):
        collection.insert_one(request.data)
        return Response({"status":"success"}, status=status.HTTP_201_CREATED)
        # serializer = self.serializer_class(data=request.data)
        # if serializer.is_valid():
            # serializer.save()
            
        #     return Response({"status":"success", "data":{"note":serializer.data}}, status=status.HTTP_201_CREATED)
        # else:
        #     return Response({"status":"fail", "messages":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class NoteDetail(generics.GenericAPIView):
    queryset = NoteModel.objects.all()
    serializer_class = NoteSerializer

    def get_note(self, pk):
        try:
            return NoteModel.objects.get(pk=pk)
        except:
            return None
        
    def get(self, request, pk):
        allNotes = collection.find({})

        for note in allNotes:
            print(note['title'])
        
        return Response({"status":"success"})
        # note = self.get_note(pk=pk)
        # if note==None:
        #     return Response({"status":"fail", f"message":"Note with ID: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)
        
        # serializer = self.serializer_class(note)
        # return Response({"status":"success", "data":{"note":serializer.data}})
    
    def patch(self, request, pk):
        note = self.get_note(pk)
        if note==None:
            return Response({"status":"fail", f"message":"Note with ID: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = self.serializer_class(note, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.validated_data['updatedAt'] = datetime.now()
            serializer.save()
            return Response({"status":"success", "data":{"note":serializer.data}})
        return Response({"status":"fail", "message":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        note = self.get_note(pk)
        if note==None:
            return Response({"status":"fail", f"message":"Note with ID: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)
        
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


