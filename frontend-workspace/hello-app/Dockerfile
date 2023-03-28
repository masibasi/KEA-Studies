FROM node:16-alpine 
# npm에 맞는 가상이미지를 만들겠다는 
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY ./ ./
EXPOSE 3000
# 포트를 지정하는 것
CMD ["npm", "run", "start"]f