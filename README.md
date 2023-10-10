# Coffeeroasters Subscription Site

This repository contains the implementation of a functional coffee subscription website, created according to the design guidelines provided in the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). The project was developed using the Astro framework and is fully responsive, adapting to any screen size.

## Table of contents

- [Technologies Used](#technologies-used)
- [Deploy on Vercel](#deploy-on-vercel)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Using Astro](#using-astro)
- [Code Formatting](#code-formatting)
- [Want to learn more?](#want-to-learn-more)
- [Author](#author)

## Technologies Used

- HTML
- JavaScript
- Tailwind CSS
- Astro
- TypeScript
- EsLint
- Prettier

## Getting Started

Follow the steps below to set up and run the project on your local environment:

1. Clone this repository:

   ```bash
   git clone https://github.com/joaom00/coffeeroasters.git
   ```

2. Navigate to the project directory:

   ```bash
   cd coffeeroasters
   ```

3. Install dependencies using one of the following package managers (choose one):

   ```bash
   npm install
   yarn install
   pnpm install
   ```

4. After installing dependencies, start the project:

   ```bash
   npm start
   yarn start
   pnpm start
   ```

The site will be available at [http://localhost:4321](http://localhost:4321/).

## Deploy on Vercel

This project is deployed on Vercel. You can access the live site at [Vercel deploy](https://in-dev-coffeeroasters-subscription-site.vercel.app/).

## Project Structure

Inside your Astro project, you'll see the following folders and files:

```bash
   /
   ├── public/
   ├── src/
   │ ├── assets/
   │ ├── components/
   │ ├── layouts/
   │ └── pages/
   └── package.json
```

Astro looks for .astro or .md files in the src/pages/ directory. Each page is exposed as a route based on its file name.

There's nothing special about src/components/, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the public/ directory.

## Using Astro

This project was built using the Astro framework. If you're new to Astro and want to learn more about how to use it, follow these steps:

1. Install Astro globally (if you haven't already):

   ```bash
      npm install -g astro
   ```

2. Create a new Astro project using the basics template:

   ```bash
      npm create astro@latest -- --template basics
   ```

3. Start your Astro project locally:

   ```bash
      npm run dev
   ```

Your Astro project will be available at http://localhost:3000.

4. To build your production site, run:

   ```bash
      npm run build
   ```

5. For more information and advanced usage of Astro, refer to the [Astro documentation](https://docs.astro.build/).

## Code Formatting

We use Prettier and ESLint for code formatting in this project to ensure consistent and clean code. You can format your code using the following commands:

- Format all JavaScript and TypeScript files:

  ```bash
     npm run format
  ```

- Check for code formatting issues:

  ```bash
     npm run lint
  ```

## Want to learn more?

During this project, I learned how to work with a new framework called Astro. Additionally, I gained experience in managing images using the features provided by the Astro framework. It was a valuable learning experience that expanded my skillset as a developer.

I also learned how to optimize images using art direction, which allowed me to deliver a better user experience by serving different image versions based on the user's device and screen size.

## Author

- GitHub: [João Pedro Magalhães](https://github.com/joaom00)
- Email: joaom00.dev@gmail.com
- Website: [Portfolio](https://jpedromagalhaes.vercel.app/)
