FROM node:18

WORKDIR /app

# copy backend package.json
COPY backend/package*.json ./backend/

# install dependencies
RUN cd backend && npm install

# copy project files
COPY . .

EXPOSE 3000

CMD ["node", "backend/app.js"]