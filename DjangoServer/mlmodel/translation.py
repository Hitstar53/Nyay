import PyPDF2
import docx
from deep_translator import GoogleTranslator
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from docx2pdf import convert
from io import BytesIO  # Add this import for working with file-like objects

font_name = "Devanagari"  # Change this to your Hindi font name
pdfmetrics.registerFont(TTFont(font_name, f"DjangoServer/{font_name}.ttf"))

def pdf_to_text(pdf_file):
    text = ""
    pdf_reader = PyPDF2.PdfReader(pdf_file)
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        text += page.extract_text()
    return text

def translate(pdf_file):
    # Extract text from the PDF
    if isinstance(pdf_file, str):
        # If the input is a file path
        with open(pdf_file, "rb") as pdf_file:
            text = pdf_to_text(pdf_file)
    elif isinstance(pdf_file, BytesIO):
        # If the input is a BytesIO object (uploaded file)
        text = pdf_to_text(pdf_file)
    else:
        raise ValueError("Unsupported input type. Please provide a file path or BytesIO object.")

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

    # Save the translated text to a text file
    file_path = "translated.txt"  # Change this to your desired file path
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
    docx_file_path = 'translated.docx'
    doc.save(docx_file_path)

    # Convert the Word document to PDF
    convert(docx_file_path)

    print('PDF file converted successfully.')

# Example usage:
# pdf_file_path = 'LegalDoc.pdf'  # Replace with your PDF file path
# translate(pdf_file_path)

# You can now call the function with either a file path or a BytesIO object.
