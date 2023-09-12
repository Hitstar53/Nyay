import pytesseract
import cv2

pytesseract.pytesseract.tesseract_cmd = r'C:/Users/Arshad Mapari/AppData/Local/Programs/Tesseract-OCR/tesseract.exe'
image = cv2.imread('AadhaarCard.jpg') # Aadhaar Card Pic

text = pytesseract.image_to_string(image)
text.replace("\n", " ")

name = "Arshad Husenmiya Mapari" or "Arshad Mapari"
if name or name.upper() in text:
    print("Verified")
else:
    print("Not Verified")

image = cv2.imread('BarCouncilID.jpg') # Bar Council ID Pic
text = pytesseract.image_to_string(image)
text.replace("\n", " ")

name = "Pranoy Kumar"
if name or name.upper() in text:
    print("Verified")
else:
    print("Not Verified")