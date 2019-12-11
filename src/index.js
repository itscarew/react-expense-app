import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import * as serviceWorker from "./serviceWorker";
import Routers from "./routes/routers";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { logout, login } from "./actions/auth";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import { history } from "./routes/routers";
import Loader from "./component/loader";
import Modal from "react-modal";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Routers />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

Modal.setAppElement(document.getElementById("root"));

ReactDOM.render(<Loader />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    });

    if (history.location.pathname === "/") {
      history.push("/main");
    }
  } else {
    store.dispatch(logout());
    history.push("/");
    renderApp();
  }
});
