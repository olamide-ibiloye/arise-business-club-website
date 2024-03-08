FROM ubuntu:latest

RUN apt update
RUN apt-get -y update
RUN apt-get -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_21.x | bash -
RUN apt-get install -y nodejs
RUN apt update


WORKDIR src

# CMD npm run dev

RUN npm install
RUN npm run build


CMD npm run start