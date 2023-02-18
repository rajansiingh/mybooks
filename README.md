# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Running mybooks:
1) Go to the terminal
### `cd mybooks`
### `yarn install`
### `yarn start`
Now you will be able to play with mybooks

Running chitragupt:
1) Go to the terminal 
### `cd chitragupt`
### `yarn link`

### `cd mybooks`
### `yarn link "chitragupt"`
 Open mybooks in VS Code and go to DefaultLayout.js
    uncomment line // import Chitragupt from "chitragupt";
    uncomment line // const framework = useMemo(() => new Chitragupt({appName: 'MyBooks'}), []);
    uncomment line // framework.updateContext({context: location.pathname});
###  `yarn start`  -> to run mybooks again