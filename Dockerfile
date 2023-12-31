FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN npm install
RUN rm /etc/nginx/sites-enabled/default
RUN rm /etc/nginx/sites-available/default
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
COPY nginx-rout /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/nginx-rout /etc/nginx/sites-enabled/

EXPOSE 80

CMD ["nginx","-g","daemon off;"] 
