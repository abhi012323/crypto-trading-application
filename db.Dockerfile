FROM node:14
WORKDIR /app
RUN npm install -g json-server
COPY . .
EXPOSE 8000
CMD ["json-server","-p","8000","-w","database/db.json","--host","0.0.0.0"]

