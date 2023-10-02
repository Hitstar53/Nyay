from pdf2image import convert_from_path
from deep_translator import GoogleTranslator
from pypdf import PdfMerger
import pytesseract
import aspose.words as aw
import os

def translate(input_pdf_path, output_pdf_path):
    pytesseract.pytesseract.tesseract_cmd = '../../venv/bin/tesseract'
    images = convert_from_path(input_pdf_path, poppler_path='../../venv/bin')

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

    j = 1
    merger = PdfMerger()
    while(j < i):
        merger.append("TranslatedLegalDoc"+str(j)+".pdf")
        j += 1
    merger.write(output_pdf_path)
    merger.close()

    # Clean up temporary files
    for k in range(1, i):
        os.remove("TranslatedLegalDoc" + str(k) + ".pdf")
    os.remove("translated.txt")

    return output_pdf_path