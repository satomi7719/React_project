// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import Carousel from "./Carousel";
// import "react-responsive-carousel/lib/styles/carousel.m

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AppRouter from './router'
import "./index.css";

const App = () => (
  <div>
    <AppRouter />
  </div>
);

render(<App />, document.getElementById("root"));