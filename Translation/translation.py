from pdf2image import convert_from_path
from deep_translator import GoogleTranslator
from pypdf import PdfMerger
import pytesseract
import aspose.words as aw

pytesseract.pytesseract.tesseract_cmd = r'C:\Users\Arshad Mapari\AppData\Local\Programs\Tesseract-OCR\tesseract.exe'
images = convert_from_path("Docs/LegalDoc.pdf", poppler_path = r'D:\Poppler\poppler-23.08.0\Library\bin')

i = 1
for image in images:
    text = pytesseract.image_to_string(image)
    translated_text = GoogleTranslator(source='auto', target='mr').translate(text)
    with open("translated.txt", "w", encoding='utf-8') as file:
        file.write(translated_text)
        file.close()
        doc = aw.Document("translated.txt")
        doc.save("TranslatedLegalDoc"+str(i)+".pdf", aw.SaveFormat.PDF)
    i += 1
file.close()

j = 1
merger = PdfMerger()
while(j < i):
    merger.append("TranslatedLegalDoc"+str(j)+".pdf")
    j += 1
merger.write("TranslatedLegalDoc.pdf")
merger.close()