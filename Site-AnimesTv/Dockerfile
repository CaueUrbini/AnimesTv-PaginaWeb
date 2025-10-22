FROM nginx:alpine

COPY . /usr/share/nginx/html


#Onde o nginx irá rodar
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
#docker build -t site-animestv .    
#docker run -d -p 5547:80 site-animestv