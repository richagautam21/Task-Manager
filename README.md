# Task Manager
A Dynamic Theme Switcher with User Preferences and a Task Manager that allows users to switch between different themes, save their preferences using Redux, and manage tasks with CRUD operations. The application demonstrates the use of hooks and have a polished UI.

## Table of Contents
- Live Demo
- Features
- Run the App
- Technology Stack
- Package info


## Live Demo
Take a look at the live version here: 

## Features

It a single-page website in React that contains a following features:
1. User Interface: 
   - Designed a landing page with a header and main content area.
   - The header contains the application title and a theme switcher button.
   - The main content area displays a task manager interface.

2. Theme Switcher: 
   - Implemented a theme switcher button in the header.
   - When clicked, the theme of the entire application toggles between light and dark modes.
   - Used CSS to define the styles for both light and dark themes.

3. Task Manager:
   - Allow users to add new tasks with a title and description.
   - Display a list of all tasks with options to edit and delete each task.
   - Implement a filter to view tasks based on their status (All, Completed, Pending).

4. State Management with Redux:
   - Used Redux to manage the state of the theme and the tasks.
   - When a user switches the theme, the preferences are  saved in the Redux store.
   - On page reload, the application remembers the user's last theme preference and load the appropriate theme.

## Run the App
Clone this Repository

git clone https://github.com/richagautam21/Task-Manager

Initial Setup
Run the following when setting up the project for the first time:

`npm run install`
## Technology Stack
- React for Frontend Library
- React Hooks for Functional Components.
- Create-react-app for bundling.
- NPM to install the front-end libraries and the bundler.

## Packages info

- redux: library for implementation of redux
- react-redux: combine redux with react
- redux-persist: It will make our store object persistent.
- redux-logger: it will create console log for every action user dispatch.
- react-router-dom: used for navigation in react application
- redux-thunk: redux directly do not support asynchronous coding, So we need to use this. We can also use redux-saga instead of it.
- React-bootstrap: using bootstrap classes in React application.
- lodash: javascript library for manipulating array.
