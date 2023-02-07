FROM node:16.14.0

RUN apt update
RUN apt-get install git
RUN git clone https://github.com/kevinguyodo/challenge-48h.git
WORKDIR /challenge-48h

RUN npm install

CMD ["npm", "run", "dev"]
