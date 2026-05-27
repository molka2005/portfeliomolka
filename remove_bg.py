import sys
from rembg import remove
from PIL import Image

input_path = "portfelionmolka/src/Components/about.jpg"
output_path = "portfelionmolka/src/Components/about_nobg.png"

print("Opening image...")
input_image = Image.open(input_path)
print("Removing background...")
output_image = remove(input_image)
print("Saving image...")
output_image.save(output_path)
print("Background removed successfully!")
