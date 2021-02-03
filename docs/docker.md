# Docker

## Containers

### Storybook

This image/container sets compiles Storybook, binds to 6006, and watches for changes.

`docker-compose up storybook [-d]`

### Yarn

All yarn commands can be run in the following fashion:

`docker-compose run [--rm] yarn [COMMAND]`

The --rm flag removes the container once the command is complete.

#### Examples:

Run Test Watcher: `docker-compose run --rm yarn test:watch`
Run ESLint: `docker-compose run --rm yarn fmt:eslint`
Run Prettier: `docker-compose run --rm yarn fmt:eslint`

A list of all available commands can be viewed in [../package.json](package.json)
