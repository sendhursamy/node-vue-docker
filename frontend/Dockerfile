# pull official base image
FROM node:lts-alpine

# set working directory
WORKDIR /usr/app/frontend/agent-care/
RUN npm install -g @vue/cli
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/frontend/agebt-care/node_modules/.bin:$PATH

# install app dependencies
COPY ./agent-care/package.json ./
# COPY package-lock.json ./
COPY . .
RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . .

# start app
# CMD ["npm", "start"]