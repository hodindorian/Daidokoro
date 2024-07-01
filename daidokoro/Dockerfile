FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

ENTRYPOINT ["ng", "serve", "--open"]
