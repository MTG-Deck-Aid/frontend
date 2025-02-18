FROM node:latest

# Copy current directory to the current directory
COPY . . 

# Move directories
WORKDIR /mystic_tuner_frontend

# Install dependencies
RUN npm install 

# Expose the container port the app runs on
EXPOSE 3000

# Start the frontend container

CMD ["npm","run", "start"]