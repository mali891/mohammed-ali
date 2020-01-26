<h1 align="center">
  Mohammed Ali's personal site
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/502ba45e-9ef5-43a9-a549-ab13eb9f724d/deploy-status)](https://app.netlify.com/sites/ma-dev/deploys)

Hey, I'm Mohammed, Freelance Front-end Engineer based in Huddersfield, West Yorkshire. This is my personal site. Thanks for visiting. Below is some blurb about how you can build and run the site locally if you wish, the tech choices I made, known bugs, and future plans for the project.

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
