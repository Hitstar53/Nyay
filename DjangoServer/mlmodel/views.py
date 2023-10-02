from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.files import File
from django.http import FileResponse
from . import recommendationsnew, translation
from . import legal
import tempfile, os

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

        # Create a temporary directory to store the uploaded file
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_file_path = os.path.join(temp_dir, uploaded_file.name)

            # Save the uploaded file to the temporary directory
            with open(temp_file_path, 'wb') as temp_file:
                for chunk in uploaded_file.chunks():
                    temp_file.write(chunk)

            # Translate the temporary file and get the path of the translated file
            translated_file_path = translation.translate(temp_file_path, "TranslatedLegalDoc.pdf")

            # Check if the translated file exists
            if os.path.exists(translated_file_path):
                # Open the translated file for reading and create a Django File object
                with open(translated_file_path, "rb") as translated_file:
                    django_file = File(translated_file)

                # Create a Django FileResponse to serve the file
                response = FileResponse(django_file, as_attachment=True)
                response['Content-Disposition'] = f'attachment; filename="{os.path.basename(translated_file_path)}"'

                return response
            else:
                return Response({"message": "Translation failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)