# VisualBox.io Node.js Dockerfile template.
# Do not modify this file unless you know what you're doing.

# Include VisualBox utilities layer.
# This layer contains the "boot" binary and "visualbox" Node module.
# The "boot" binary will act as a middleware between the integration
# process and VisualBox, and allows for easy communication with the
# VisualBox service through the "visualbox" Node module.
FROM visualboxio/utils:latest as utils

# Create a common base for coming layers.
FROM node:12-alpine as base

# Create a separate layer for installing Node modules that are
# specified in the "package.json" file.
FROM base as modules
WORKDIR /modules
COPY package.json .
RUN yarn

# Copy over the "visualbox" Node module from the utility layer.
COPY --from=utils /node/visualbox ./node_modules/visualbox

# Final image.
FROM base
WORKDIR /app

# Copy over the "boot" binary middleware.
COPY --from=utils /boot /visualbox/boot

# Copy over all Node modules from the modules layer.
COPY --from=modules /modules/node_modules ./node_modules
COPY . .

# Set the container entrypoint to invoke the command
# "node index.js" through the "boot" middleware.
# You can change these arguments as you like.
ENTRYPOINT /visualbox/boot node index.js
