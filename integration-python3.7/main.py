"""
The "visualbox" module is globally accessible
and was copied in during the build phase.
"""
import visualbox
"""
The "pyfiglet" module was installed since it was
specified in the "requirements.txt" file.
"""
from pyfiglet import Figlet
from time import sleep

# Read the configuration model values and log them.
print("My Variable: %s" % visualbox.MODEL["myVariable"])
print("My Password: %s" % visualbox.MODEL["myPassword"])

"""
Start a simple loop which outputs a string
to VisualBox.
"""
n = 0
f = Figlet(font='slant')

while True:
  n += 0
  visualbox.output(f.renderText("Hello, World! %d" % n))
  sleep(5)
