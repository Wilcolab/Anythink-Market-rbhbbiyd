# Use Node 18 to support modern JS features
FROM node:18

WORKDIR /app

# Copy dependency files first to leverage Docker cache
COPY package*.json ./

RUN yarn install

# Copy the rest of the application
COPY . .

EXPOSE 8001

CMD [ "yarn", "start" ]