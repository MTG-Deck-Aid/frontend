# ==== Create a Next.js frontend ====
# Use the official Node.js image
FROM node:latest

# Set the working directory (frontend/mystic_tuner_frontend:/app_src)
WORKDIR /app_src

# Copy src files from mystic_tuner_frontend to the container
COPY mystic_tuner_frontend /app_src

# Install dependencies
RUN npm install 

# Create ENV key for Auth0 with node
RUN echo "AUTH0_SECRET='$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")'" >> .env

# Expose the container port the app runs on
EXPOSE 3000

# Start the frontend container in development mode
CMD ["npm","run", "dev"]