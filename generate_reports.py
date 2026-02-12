import os
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Preformatted

def add_cover_page(doc_elements, title, cover_image_path):
    from reportlab.platypus import Image
    if os.path.exists(cover_image_path):
        # Adjusted size to fit within margins
        img = Image(cover_image_path, width=450, height=600)
        doc_elements.append(img)
        doc_elements.append(PageBreak())
    else:
        print(f"Cover image not found: {cover_image_path}")

def add_code_section(doc_elements, filename, content):
    styles = getSampleStyleSheet()
    h2_style = styles['Heading2']
    code_style = styles['Code']
    
    doc_elements.append(Paragraph(filename, h2_style))
    doc_elements.append(Spacer(1, 10))
    # Preformatted for code to preserve whitespace
    p = Preformatted(content, code_style)
    doc_elements.append(p)
    doc_elements.append(Spacer(1, 20))

def generate_report(output_filename, title, files_to_include, cover_image_path):
    # Reduced margins for more room
    doc = SimpleDocTemplate(output_filename, pagesize=letter, rightMargin=50, leftMargin=50, topMargin=50, bottomMargin=50)
    elements = []
    
    add_cover_page(elements, title, cover_image_path)
    
    for filepath in files_to_include:
        if os.path.exists(filepath):
            with open(filepath, 'r') as f:
                content = f.read()
                filename = os.path.basename(filepath)
                add_code_section(elements, filename, content)
        else:
            print(f"File not found: {filepath}")
            
    doc.build(elements)
    print(f"Generated: {output_filename}")

if __name__ == "__main__":
    cover_image = "/Users/owner/.gemini/antigravity/brain/7d05f055-c2ad-4de5-8b09-0a5eec0cbfa9/custom_cover_page_1768655247416.png"
    
    # Lab 1 Files
    lab1_dir = "/Users/owner/Desktop/lab_web_design/lab1"
    lab1_files = [
        os.path.join(lab1_dir, "index.html"),
        os.path.join(lab1_dir, "about.html"),
        os.path.join(lab1_dir, "contact.html"),
        os.path.join(lab1_dir, "style.css"),
    ]
    generate_report("/Users/owner/Desktop/lab_web_design/Lab1_Report.pdf", "Lab 1: Multi-page Blogging Website", lab1_dir + "/index.html" if False else lab1_files, cover_image)
    
    # Lab 2 Files (Just problem 1 for now or as requested)
    lab2_dir = "/Users/owner/Desktop/lab_web_design/lab2"
    lab2_files = [
        os.path.join(lab2_dir, "problem1/index.html"),
        os.path.join(lab2_dir, "problem1/script.js"),
    ]
    generate_report("/Users/owner/Desktop/lab_web_design/Lab2_Report.pdf", "Lab 2: JavaScript Assignments", lab2_files, cover_image)

    # Portfolio Files
    portfolio_dir = "/Users/owner/Desktop/lab_web_design/portfolio"
    portfolio_files = [
        os.path.join(portfolio_dir, "index.html"),
        os.path.join(portfolio_dir, "style.css"),
    ]
    generate_report("/Users/owner/Desktop/lab_web_design/Portfolio_Report.pdf", "Personal Portfolio Website", portfolio_files, cover_image)
