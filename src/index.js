import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Fav from "./Redux/reducers";
import Favorites from "./components/Favorites";

const store = createStore(Fav);

// console.log("Store", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Favorites /> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();

reportWebVitals();
