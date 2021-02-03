FROM node:current-alpine AS base
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install && yarn cache clean
COPY ./ ./
