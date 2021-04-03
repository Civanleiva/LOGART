import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Modal from "react-modal";
import { Provider } from "react-redux";
import store from "./store.js";

Modal.setAppElement("#root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
