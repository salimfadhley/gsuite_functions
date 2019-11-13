FROM node:latest AS node_base
WORKDIR /project
RUN npm install --upgrade

FROM node_base AS project_base
COPY /package.json /project/package.json
RUN npm install

FROM project_base as gsuite_functions
COPY / /project
RUN npm build


