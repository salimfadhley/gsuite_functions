FROM node:latest AS node_base
WORKDIR /project
COPY /package.json /project/package.json
RUN npm install
