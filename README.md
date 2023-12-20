# LIGHTS OUT

## **The Game**

*Lights Out* is a logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off.

You can click on a cell to toggle that light — but it also toggles the light above it, to the left of it, to the right of it, and below it. (Cells on an edge or in the corner won’t flip as many lights, since they are missing some neighbours).

## Components:
- App: Top level component that renders the game
- Board: Renders board up of a grid of cells
- Cell: Individual cell components that will "lit or unlit" 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run the game locally: 
```
git clone [repo-link]
cd [repo-name]
npm install
npm start

```



Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).