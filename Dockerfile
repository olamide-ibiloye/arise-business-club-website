FROM ubuntu:latest

RUN apt update
RUN apt-get -y update
RUN apt-get -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_21.x | bash -
RUN apt-get install -y nodejs
RUN apt update


WORKDIR src

# CMD npm run dev

CMD npm install && npm run build && npm run start