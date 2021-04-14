<p align="center">
  <img width="260" height="100" src="./public/images/avatar.svg">
</p>
<p align="center">
<img width="200" height="50" src="./public/images/logo.svg"></p>
<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/croschel/ignews">

  <a href="https://github.com/croschel/ignews/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/croschel/ignews">
  </a>

  <a href="https://github.com/croschel/ignews/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/croschel/ignews">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

## Tecnologies

This project was made with this tecnologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/docs)
- [Typescript](https://www.typescriptlang.org/)
- [FaunaDB](https://docs.fauna.com/fauna/current/start/index.html)
- [Stripe](https://stripe.com/docs)
- [Prismic](https://prismic.io/docs/technologies/javascript)

## Description

It is a project about Ignite Course from Rocketseat where I am learning some fundamentals and try some new skills about React and NextJS.

## About the project

It is a blog with subscription control like medium.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

- Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

- Builds the app for production to the `build` folder.

### `stripe listen --forward-to localhost:3000/api/webhooks`

- if you want to follow stripe changes you can install globaly stripe-cli, execute `stripe login` and execute this script.

### Run Correctly with stripe

don`t forget to set environment variables like .env.example
