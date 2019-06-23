# VisualBox.io Python 3.7 Dockerfile template.
# Do not modify this file unless you know what you're doing.

# Include VisualBox utilities layer.
# This layer contains the "boot" binary and "visualbox" Python module.
# The "boot" binary will act as a middleware between the integration
# process and VisualBox, and allows for easy communication with the
# VisualBox service through the "visualbox" Python module.
FROM visualboxio/utils:latest as utils

# Create a common base for coming layers.
FROM python:3.7-alpine as base

# Create a separate layer for installing Python modules that are
# specified in the "requirements.txt" file.
FROM base as modules
WORKDIR /modules
COPY requirements.txt .
RUN pip install --install-option="--prefix=/modules" -r requirements.txt

# Copy over the "visualbox" Python module from the utility layer.
COPY --from=utils /python3/visualbox /modules/lib/python3.7/site-packages/visualbox

# Final image.
FROM base
WORKDIR /app

# Copy over the "boot" binary middleware.
COPY --from=utils /boot /visualbox/boot

# Copy over all Python modules from the modules layer.
COPY --from=modules /modules /usr/local
COPY . .

# Set the container entrypoint to invoke the command
# "python main.py" through the "boot" middleware.
# You can change these arguments as you like.
ENTRYPOINT /visualbox/boot python -u main.py
