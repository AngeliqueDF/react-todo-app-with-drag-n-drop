- [Todo app](#todo-app)
  - [Overview](#overview)
  - [Description](#description)
  - [Technologies](#technologies)
  - [My process](#my-process)
  - [How to run the project](#how-to-run-the-project)
  - [Status](#status)
    - [Planned changes](#planned-changes)
  - [Sources](#sources)

# Todo app

![Screen shot of the todo app](./src/images/screenshot.png)

## Overview

This app will help you keep track of your tasks. Find your todos exactly the way you left them when you reopen the browser.

## Description

I started this project right before I began learning React.js. It was a good opportunity to practice my skills on my own and use the best the library has to offer. 

Below are the original requirements:

> ## The challenge
> Users should be able to:
> - View the optimal layout for the app depending on their device's screen size.
> - See hover states for all interactive elements on the page.
> - Add new todos to the list.
> - Mark todos as complete.
> - Delete todos from the list.
> - Filter by all/active/complete todos.
> - Clear all completed todos.
> - Toggle light and dark mode.
> - **Bonus**: Drag and drop to reorder items on the list.

## Technologies

- ``React.js`` to build the UI and its functionalities.
  - Functional Components
  - Hooks: ``useState``, ``useEffect``
- ``localstorage`` to store the tasks and their status.
- ``CSS Grids`` for the ``.tasks-state`` component's mobile/desktop styling.
- ``CSS variables`` to avoir repetitiveness in the code.
- ``flexbox`` for the layout.
- Semantic and accessible HTML5.
- Responsive layout.

## My process

1. Start with writing the HTML structure. 
   1. Keep the layout accessible and semantically correct.
   2. Assign classes and ids for styling and upcoming tests.
2. Write the CSS to match the design.
   1. Build the layout.
   2. Style individual elements.
   3. Use ``CSS variables`` for easy reassignment across media queries.
   4. Customize the checkboxes.
3. Use React.js
   1. Divide the app in components.
   2. Code the app's features
      1. Initialize state variables
      2. Write event handlers

## How to run the project

[Live demo hosted on GitHub pages]()

or

1. ``git clone ``
2. ``cd folder``
3. ``npm install``
4. `` npm start ``
5. visit [``http://localhost:3000``](http://localhost:3000)

## Status

This web app still needs a few improvements.

### Planned changes

- [ ] Add privacy consent popup.
- [ ] Add tests.
- [ ] Add drag and drop feature.
- [ ] Add hover states.

[See the advancement of the project here.](https://github.com/AngeliqueDF/todo-app-frontend-mentor/projects)

## Sources

[Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)