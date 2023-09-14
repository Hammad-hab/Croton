import ttkbootstrap as ttk
from ttkbootstrap.constants import *
from tkinter import font
import platform

tutorial = f"""
Welcome to the Croton Language Installation Wizard

Thank you for choosing Croton, a powerful and versatile programming language. 
This wizard will guide you through the installation process. Before we begin, 
please take a moment to review the system requirements.

System Requirements

Before you proceed, please ensure that your system meets the following requirements:

Operating Systems: {platform.platform().capitalize()}
Processor: {platform.processor().capitalize()}
RAM: Minimum RAM requirement
Disk Space: 100 MB
If your system meets these requirements, you're ready to proceed with the installation.

"""

root = ttk.Window()
root.title("Croton Installer")
root.resizable(False, False)

screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()

# Calculate the window width and height
window_width = 650
window_height = 600

# Calculate the X and Y positions for centering the window
x_position = (screen_width - window_width) // 2
y_position = (screen_height - window_height) // 2

root.geometry(f"{window_width}x{window_height}+{x_position}+{y_position}")

custom_font = font.Font(family="Arial", size=16)

b1 = ttk.Label(root, text=tutorial, font=custom_font)
b1.place(x=10, y=10)
root.mainloop()