#!/bin/sh

if [ -d /workspace/node_modules ]; then
  rsync -ar --info=progress2 /workspace/node_modules /workspace/app
fi

exec "$@"