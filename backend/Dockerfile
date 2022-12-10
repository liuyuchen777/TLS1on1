# Base image used 
FROM node:16
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install project dependencies
RUN apt-get update && apt-get install python
RUN npm i
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Run default command
CMD ["npm", "run", "start"]
