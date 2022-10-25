# Counter App

The Application allows managing counter state.\
It has control buttons `-` and `+` which increment or decrement the counter accordingly.


By default counter will increment itself by 1 per a second.\
To force the Counter decrement every second, set its value below zero manually

## The assignment was to make it more readable, and also add some functionality.

Specifically, please consider doing the following, in no particular order:
1) Replace single-letter variable names with something more descriptive.
2) Provide comments for each of the functions.
3) Provide a general comment for the entire program, describing its purpose.
4) Replace type any with something more specific.
5) Do not allow timer to increment counter past 10.
6) Trigger an alert when counter reaches 20.
7) If counter goes below zero, make timer decrement rather than increment it.
8) Add a drop-down to select increment and decrement step between 1, 2, and 3.
9) Use monospace font for all text on the page.
10) Create unit tests for increment, decrement and counter functions.
11) Create package configuration that could be used to serve the page.
12) Change App to log the timestamp of when that component did mount.

```
import React from "react";
import { configureStore, createAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createRoot } from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";

const increment = createAction("increment");
const decrement = createAction("decrement");

const counter = (s = 0, action: any) =>
    increment.match(action) ? s + 1 : decrement.match(action) ? s - 1 : s;

const root = combineReducers({ counter });

const timer = ({ dispatch }: { dispatch: any }) => {
    setInterval(() => dispatch(increment()), 1000);
    
    return (next: any) => (action: any) => {
        next(action);
    };
};

const s = configureStore({
    reducer: root,
    middleware: [timer],
});

const App = () => {
    const dispatch = useDispatch();
    const counter = useSelector((s: any) => s.counter);
    
    return (
        <>
            <button onClick={() => dispatch(decrement())}>-</button>
            {counter}
            <button onClick={() => dispatch(increment())}>+</button>
        </>
    );
};

createRoot(document.getElementById("root")!).render(
    <Provider store={s}>
        <App />
    </Provider>
);

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script defer src="/bundle.js"></script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
