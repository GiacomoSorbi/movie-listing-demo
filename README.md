# Description <img src="src/assets/film-roll.svg" alt="movie" width="24px"/>

This project was created to showcase base React, asynchronous JS, ES6, responsive CSS and semantic HTML capabilities.

Given the scope and constraints of the project, no use of either `react-redux` or `react-router-dom` was implemented, although the author personally prefer to use state management libraries instead of single component-based states to collect both data from API calls and user actions.

Similarly, the author opted for not using any popular CSS library (bootstrap, material-UI or others) as they would have been both too big for the task (even cherry picking specific features whenever it was possible) and a considerable reduction of the challenge level for the present test.

Testing has been managed using mostly snapshot testing for the components and separate testing for the business logic, as found in [the tests for the few utilities functions](/src/utilities/utilities.spec.js).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts <img src="src/assets/film-roll.svg" alt="movie" width="16px"/>

This project is built using yarn pnp feature; to install dependencies, run:

### `yarn`

To launch the project, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Nice to have with further development <img src="src/assets/film-roll.svg" alt="movie" width="16px"/>

- Wider test coverage;
- Refactoring and separation of the asynchronous logic in `App.js`;
- Expansion of the scope, being able to enact more sophisticated queries;
- More information displayed for each movie, with relevant adjustments to the responsiveness of the app;
- Implementing routing functionalities that reflect the currently displayed data (ie: having these data in the url as parameters), so to allow bookmarking and link sharing with specific queries already pre-selected.
