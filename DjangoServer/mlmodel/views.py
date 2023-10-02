from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from . import recommendationsnew
from . import legal
import pandas as pd

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