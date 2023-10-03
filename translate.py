import PyPDF2
import docx
from deep_translator import GoogleTranslator
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from docx2pdf import convert

font_name = "Devanagari"  # Change this to your Hindi font name
pdfmetrics.registerFont(TTFont(font_name, f"{font_name}.ttf"))

def pdf_to_text(pdf_file):
    text = ""
    with open(pdf_file, "rb") as pdf_file:
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            text += page.extract_text()
    return text

pdf_file = './LegalDoc.pdf'
text = pdf_to_text(pdf_file)

# Split the input text into chunks of max_chunk_size characters
text_chunks = [text[i:i+4999] for i in range(0, len(text), 4999)]

# Initialize an empty list to store translated chunks
translated_chunks = []

# Translate each chunk and store the results
for chunk in text_chunks:
    translated_chunk = GoogleTranslator(source='en', target='hi').translate(chunk)
    translated_chunks.append(translated_chunk)

# Concatenate the translated chunks to get the final translated text
translated_text = " ".join(translated_chunks)

file_path = "translated.txt"  # Change this to your desired file path

# Open the file in write mode ("w")
# If the file doesn't exist, it will be created. If it exists, its contents will be overwritten.
with open(file_path, "w", encoding="utf-8") as file:
    file.write(translated_text)

# Read the content from the text file
with open('translated.txt', 'r', encoding='utf-8') as txt_file:
    text_content = txt_file.read()

# Create a new Word document
doc = docx.Document()

# Add the text content to the Word document
doc.add_paragraph(text_content)

# Save the Word document as a .docx file
doc.save('translated.docx')

print('Text file converted to Word document successfully.')

convert("translated.docx")