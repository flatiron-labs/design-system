FROM node:15.7-slim

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV BABEL_ENV $NODE_ENV

# Default to port 6006 for Storybook
ARG PORT=6006
ENV PORT $PORT
EXPOSE $PORT

# Install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /workspace
COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean
ENV PATH /workspace/node_modules/.bin:$PATH

# Copy in our source code last, as it changes the most
WORKDIR /workspace/app
COPY . .

# COPY docker-entrypoint.sh /usr/local/bin/
# ENTRYPOINT ["docker-entrypoint.sh"]

CMD [ "yarn", "storybook" ]
