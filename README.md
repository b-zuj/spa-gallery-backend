# SPA Gallery - Backend

[![Build Status](https://travis-ci.com/travis-ci/travis-web.svg?branch=master)](https://travis-ci.com/travis-ci/travis-web)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
This is project prepared as a part of course at School of Applied Technology </salt> and it was created in colaboration with [MaciejGL](https://github.com/MaciejGL) and [mountwebs](https://github.com/mountwebs). It contains an API for simple [SPA gallery](https://github.com/b-zuj/spa-gallery-frontend) that has the function of searching images by keyword. The project is deployed on Heroku - https://git.heroku.com/salt-spa-gallery.git.

**NOTE that there is a 50 requests per hour limit on unsplash API thus also on this API**

## Motivation
It is a learning-by-doing project.

## Tech/framework used
<b>This project uses</b>
- JavaScript + Axios
- [Express.js](https://webpack.js.org/)

## API Reference
The project is using unsplash API containing the largest open collection of high-quality photos - https://unsplash.com/developers

## How to use?
In order to deploy your own version you have to get your own API key from unsplash and add it to .env file as ACCESS_KEY (use [dotenv](https://www.npmjs.com/package/dotenv) package).

## Available Scripts
In the project directory, you can run:

> `npm test`
Launches the test runner - jest.

> `npm start`
Launches the server on http://localhost:5000/.

> `npm run start dev`
Launches the nodemon server on http://localhost:5000/.

> `npm run lint`
Runs eslint with [eslint-config-salt](https://github.com/appliedtechnology/eslint-config-salt) configuration.

## License
MIT © [Barbara Zujewska]()
