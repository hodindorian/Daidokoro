FROM node:alpine AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install -g @angular/cli
RUN npm install

COPY . .
RUN npm run build -- --configuration=production --base-href='/containers/dorianhodin-daidokoro'


FROM nginx:alpine as deploy

EXPOSE 8080

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/portofolio/browser/ /usr/share/nginx/html