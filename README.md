# Personal Website

> [!NOTE]  
> This website is built from the [Paweł Kosiec's awesomepersonal website](https://kosiec.dev).

This repository contains source code of the Tarek's personal website. Please see it [here](https://liuyuweitarek.github.io) in the future.

## Development

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Toolchain

This project uses [Volta](https://github.com/volta-cli/volta) to manage the NodeJS version. Volta automatically downloads and installs the right Node.js version when you run any of the `node` or `npm` commands. Therefore, it is recommended to install it before developing this project to ensure the right Node.js version is used.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This site is deployed automatically from the `main` branch using [Cloudflare Pages](https://pages.cloudflare.com/).
