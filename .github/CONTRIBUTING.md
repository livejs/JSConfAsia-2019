# Contributing

If you want to contribute please follow the guide in this file.

<!-- toc -->

- [Contributing](#contributing)
  - [Pull request](#pull-request)
  - [Issues](#issues)
  - [Development](#development)
    - [Setup](#setup)
    - [Run](#run)
    - [Generate static version](#generate-static-version)

<!-- tocstop -->

## Pull request

Ensure that the changes are tested and documented.  
DO NOT commit any built versions.  

This project uses commitizen and conventional changelog. Please use either
to ensure that the changes are listed correctly and the commits can be parsed.

## Issues

Please include the browser and operating system.

A snippet of example code helps a lot, a link to the repo with the issue helps even more.
If the issue can be seen live please provide a link.

Include info about your development environment

* Chrome version

## Development

### Setup

```
npm i
```

### Run

```bash
npm start
```

### Generate static version

To generate a static version that can be used with GitHub-Pages use:

```bash
npm run build
```

This will put everything into the `docs` folder.
