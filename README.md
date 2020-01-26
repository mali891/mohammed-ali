<p align="center">
<svg class="c-nav__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="linear-gradient-1" x1="53.83" y1="187.54" x2="246.17" y2="187.54" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8fd3f4"></stop><stop offset=".11" stop-color="#7dd8e8"></stop><stop offset=".13" stop-color="#7ad9e6" stop-opacity=".97"></stop><stop offset=".26" stop-color="#6cdddd" stop-opacity=".8"></stop><stop offset=".33" stop-color="#5de1d3" stop-opacity=".86"></stop><stop offset=".46" stop-color="#46e8c4" stop-opacity=".96"></stop><stop offset=".53" stop-color="#3deabe"></stop><stop offset=".55" stop-color="#3ceabe"></stop><stop offset=".83" stop-color="#37ecba"></stop></linearGradient></defs><g><g><path d="M205 193.66l-10-17.32-40-69.28c-2.75-4.77-7.25-4.77-10 0l-40 69.28-10 17.32-40 69.28c-2.75 4.77-.5 8.66 5 8.66h180c5.5 0 7.75-3.89 5-8.66zm-125 66c-5.5 0-7.75-3.9-5-8.66l30-52 10-17.32 30-52c2.75-4.77 7.25-4.77 10 0l30 52L195 199l30 52c2.75 4.76.5 8.66-5 8.66H80z" fill="url(#linear-gradient-1)"></path><path class="u-fill--secondary" d="M305 193.66l-10-17.32-40-69.28c-2.75-4.77-7.25-4.77-10 0l-40 69.28-10 17.32-40 69.28c-2.75 4.77-.5 8.66 5 8.66h180c5.5 0 7.75-3.89 5-8.66zm-125 66c-5.5 0-7.75-3.9-5-8.66l30-52 10-17.32 30-52c2.75-4.77 7.25-4.77 10 0l30 52L295 199l30 52c2.75 4.76.5 8.66-5 8.66H180z"></path><path class="u-fill--secondary" d="M200 0C89.54 0 0 89.54 0 200s89.54 200 200 200 200-89.54 200-200S310.46 0 200 0zm0 387.5C96.45 387.5 12.5 303.55 12.5 200S96.45 12.5 200 12.5s187.5 84 187.5 187.5S303.55 387.5 200 387.5z"></path></g></g></svg>
</p>

<h1 align="center">
  Mohammed Ali's personal site
</h1>

Build status:
[![Netlify Status](https://api.netlify.com/api/v1/badges/502ba45e-9ef5-43a9-a549-ab13eb9f724d/deploy-status)](https://app.netlify.com/sites/ma-dev/deploys)

Hey, I'm Mohammed, Freelance Front-end Engineer based in Huddersfield, West Yorkshire. This is my personal site. Thanks for visiting. Below is some blurb about how you can build and run the site locally if you wish, the tech choices I made, known bugs, and future plans for the project.

## 🔗 Visit site

[Portfolio site](https://mohammed-ali.co.uk)

## 📱 Contact

[hello@mohammed-ali.co.uk](mailto:hello@mohammed-ali.co.uk)

## 🤖 Tech

This site is made using [GatsbyJS](https://www.gatsbyjs.org/). It's super fast, has lots of features out of the box, has a great developer experience if, like me, you like building things in React, and it also provided the ability to write blog posts in markdown. Also it provided a nice safe opportunity to try out [GraphQL](https://graphql.org/). Absolutely no regrets at all, building it so far has been a blast.

I've made use of React hooks, and a combination of React's Context API combined with CSS variables to control the dark/light mode theme.

## 🐛 Known bugs

The code highlighting on actual mobile is rendering unpredictable font sizes. Unable to replicate this behaviour in desktop when reducing the width of the browser. Currently unsure why this is happening, will look into it.

## 🚀 Build and run the project locally

Make sure you have a recent stable version of [NodeJS](https://nodejs.org/en/) installed, along with a package manager such as [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/lang/en/docs/install/). To begin, clone the repository, and `cd` into the project root. The following list of commands can be run from inside the project root.

1.  **Install dependencies**

    Use your package manager of choice to install the dependencies for the project.

    npm:

    ```
    npm i
    ```

    yarn:

    ```
    yarn
    ```

1.  **Build and run project**

    Either one of these commands will make the site available to view on `localhost:8000`.

    npm:

    ```
    npm run develop
    ```

    yarn:

    ```
    yarn develop
    ```

1.  **You're ready to go**

    The site is now running at `http://localhost:8000`!

## 🧐 What's inside?

A quick look at the top-level files.

    .
    ├── __mocks__/
    ├── coverage/
    ├── node_modules/
    ├── public/
    ├── src/
    ├── static/
    ├── .eslintrc
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── jest-preprocess.js
    ├── jest.config.js
    ├── LICENSE
    ├── loadershim.js
    ├── package.json
    ├── README.md
    └── setuptests.js

1.  **`/coverage`**: This directory contains all details on the projects test coverage (run `yarn test:coverage` to generate this directory). Committing to the repo is not permitted unless the test coverage threshold is met (see `package.json` for more info)

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: Gatsby is licensed under the MIT license.

1.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

## 👍 Thanks for reading!
