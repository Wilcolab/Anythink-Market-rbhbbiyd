FROM node:14

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install nodemon globally and local dependencies
RUN npm install -g nodemon
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port
EXPOSE 8001

# Start the server
CMD ["npm", "start"]