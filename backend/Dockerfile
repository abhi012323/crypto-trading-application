FROM node:16.13-alpine 
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN cd src
EXPOSE 4000
CMD ["npx", "nodemon", "server.js"]
