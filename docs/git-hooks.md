# Git Hooks

This repo makes use of the following git hooks via [Husky 5](https://typicode.github.io/husky/#/):

- pre-commit
  - Runs linting before the commit is made. Exits if there are errors.

## Workflow

Hooks added by Husky work OOTB via `package.json`'s `postinstall`.

Installing a hook:

```shell
yarn husky add .husky/pre-commit "yarn lint-staged"
yarn husky install
```

Updating a hook:

You can find all hooks in `.husky`. Feel free to edit them there.
