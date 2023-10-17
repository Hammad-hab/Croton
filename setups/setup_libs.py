import os
import platform
import requests
import zipfile


os.chdir("/usr/local/" if platform.system() in ['Linux', 'Darwin'] else "C:\Program Files" if platform.system() == 'Windows' else "/")
os.mkdir("croton_")
os.chdir("croton_")

url = 'https://github.com/Hammad-hab/Croton/raw/main/src/__build/lib.zip'  # Replace with your desired URL
local_zip_filename = 'crotonlib.zip'  # Replace with your desired local filename for the zip file
output_path = 'crotonlib'  # Replace with your desired local path for the extracted folder

# Download the zip file
response = requests.get(url)
with open(local_zip_filename, 'wb') as f:
    f.write(response.content)

# Extract the contents of the downloaded zip file
with zipfile.ZipFile(local_zip_filename, 'r') as zip_ref:
    zip_ref.extractall(output_path)

print(f'Download complete. Folder saved at {output_path}')
os.remove(local_zip_filename)