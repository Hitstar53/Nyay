from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.files import File
from django.http import FileResponse
from . import recommendationsnew, translation
from . import legal
import tempfile, os
from io import BytesIO

# Create your views here.

class ResearchView(APIView):
    def post(self, request):
        text = request.data.get("prompt")
        text = input()
        dictionary = legal.recommendcases(text)
        # print(dictionary)
        return Response({"message": "Got some data!", "data": dictionary}) 

class RecommendView(APIView):
    def post(self, request):
        text = request.data.get("prompt")
        # text = input()
        dictionary = recommendationsnew.suggest_lawyers(text,num_lawyers=5)
        # print(dictionary)
        #send a response with status code 200 (OK)
        return Response({"message": "Got some data!", "data": dictionary})
    
class TranslationView(APIView):
    def post(self, request):
        uploaded_file = request.data.get("file")
        print(uploaded_file)
        # convert the file to bytesIO object
        uploaded_file = uploaded_file.read()
        uploaded_file = BytesIO(uploaded_file)
        translation.translate(uploaded_file)
        return Response({"message": "Got some data!"})