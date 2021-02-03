FROM node:15.7-slim

# Default to production
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV BABEL_ENV $NODE_ENV

# Default to port 6006 for Storybook
ARG PORT=6006
ENV PORT $PORT
EXPOSE $PORT

WORKDIR /workspace
COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean

RUN apt-get update && apt-get upgrade -y && apt-get install -y rsync git
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /workspace/app
COPY . .

COPY docker/entrypoint.sh /usr/bin/entrypoint6.sh
RUN chmod +x /usr/bin/entrypoint6.sh
ENTRYPOINT ["entrypoint6.sh"]

# COPY docker-entrypoint.sh /usr/local/bin/
# ENTRYPOINT ["docker-entrypoint.sh"]

# CMD [ "yarn", "storybook" ]
