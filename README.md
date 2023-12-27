This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Follow these steps to install and set up the application.
```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000] with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About the project

EcoPrintiX - Keep track of your ecological footprint

EcoPrintiX is an application that combines elements of productivity, social networking and environmental sustainability to inspire and empower users to take green actions in their daily lives. This application focuses on promoting sustainable practices and creating a community committed to protecting the environment.
In EcoPrintix, users can perform a variety of eco-friendly tasks.
In addition, EcoPrintix offers a blogging platform that allows users to share their achievements, tips and experiences with the community. Users can follow others and interact with posts.

## Requirements

Make sure to have the following requirements installed:

- Node.js: You will need Node.js to run the application. You can download it [here](https://nodejs.org/).
- npm, yarn o pnpm: These are package managers for Node.js, and you will use it to install dependencies for the project.
- An .env file: This file is used to store environment variables that the application needs to function correctly.

## Configuration
To configure the application, you will need to create an .env file at the root of the project. This file should contain all the environment variables the application needs to function correctly.

Here is an example of how your .env file structure could look:

GOOGLE_CLIENT_ID = your_text
GOOGLE_CLIENT_SECRET = your_text

NEXTAUTH_URL = http://localhost:3000
NEXTAUTH_SECRET = your_text

DATABASE_URL = "your_text"

GITHUB_ID = your_text
GITHUB_SECRET = your_text

FIREBASE = your_text

ADMIN_KEY= your_text

Please make sure not to upload your .env file to your Git repository. This file contains sensitive information that should not be shared publicly. To avoid accidentally uploading it, you can add .env to your .gitignore file.

## Project Structure

- **/next**: Auto-generated folder by Next.js during the build process.

- **/node_modules**: Folder where Node.js modules are installed.

- **/prisma**: Folder for Prisma ORM configuration and data models.

- **/public**: Folder for static images.

- **/src**: Main source code folder.
  - **/app**: Contains the main application logic and components.
  - **/components**: Reusable React components used throughout the application.
  - **/context**: Context providers for managing global state.
  - **/providers**: Custom React context providers.
  - **/utils**: Utility functions and helper modules used across the project.

## Technologies Used

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Node.js](https://nodejs.org/): A JavaScript runtime environment that allows running JavaScript code on the server.
- [Next.js](https://nextjs.org/): A React framework that enables server-side rendering and static site generation for React applications.
- [Prisma](https://www.prisma.io/): An open-source JavaScript ORM that simplifies database access in Node.js and TypeScript applications.
- [ESLint](https://eslint.org/): A JavaScript and JSX linting tool that helps maintain consistent code style.
- [npm](https://www.npmjs.com/): A package manager for JavaScript, used to install and manage package dependencies.
- [CSS Modules](https://github.com/css-modules/css-modules): A CSS methodology that allows the use of local and modular styles.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): The primary programming language used for both client and server-side development.

## License

This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 3.0 Spain License.

Copyright © 2023/24 LEOPOLDO.

Permission is granted to copy, distribute, and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License".

## Project Status

>Currently in development
Stable