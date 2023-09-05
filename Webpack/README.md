# Webpack Basic Setup Project

This project aims to guide you through the setup of Webpack for a basic project. You will gain hands-on experience with entry points, output, loaders, plugins, code splitting, and setting up a dev server.

## Objectives:

- Understand how to set up Webpack for a basic project.
- Learn about entry points, output, and loaders.
- Discover how to add plugins.
- Learn to split your code into chunks.
- Set up a development server.

## Tasks:

### 1. Basic Setup

- Create and run Webpack using a basic installation.
- Set up a basic folder structure with `task_0`.
- Install dependencies.
- Create a basic `index.js` that uses jQuery.
- Ensure output files are generated in the `dist` folder.

### 2. Using Webpack with a Config File

- Install necessary packages.
- Utilize jQuery and Lodash.
- Create a javascript file that imports the necessary modules and manipulates the DOM.
- Configure Webpack to produce a production-ready `bundle.js` in a `public` folder.

### 3. Adding CSS & Images

- Support adding CSS and images via Webpack.
- Create a `css` folder and style your application.
- Configure Webpack to optimize images.
- Ensure Webpack outputs files in the `public` folder with `bundle.js` as the javascript file.

### 4. Dev Servers, Modules, and Tree Shaking

- Set up a development server running on port `8564`.
- Divide the main bundle into three modules: `header`, `body`, and `footer`.
- Configure Webpack to support multiple entry points.
- Integrate a plugin to automatically create an `index.html` file.
- Modify the Webpack config to support inline source mapping.
- Improve the development speed and bundles size by integrating relevant plugins and configurations.

## Project Structure:

- `task_0/`: Basic setup with just jQuery.
- `task_1/`: Uses Webpack with a config file and adds Lodash.
- `task_2/`: Incorporates CSS and images.
- `task_3/`: Introduces development server, modules, and tree shaking.

## Requirements:

- Ensure no errors are present in the console.
- Only one Javascript script should be imported in the HTML code.
- Follow the specific directory structure and naming conventions mentioned under each task.

## Usage:

1. Navigate to the task directory of choice.
2. Run `npm install` to install dependencies.
3. For development server in `task_3`, use `npm run start-dev`.
4. For building the project, use `npm run build`.

## Resources:

- [Debounce documentation on Lodash](https://lodash.com/docs/#debounce)

---

**Note**: Please ensure you follow the task's specific requirements, especially regarding the directory structure and the placement of files.
