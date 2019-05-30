import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Routers from "./routers";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
// import {setTextFilter} from './actions/filters';
import { logout, login } from "./actions/auth";
// import getVisibleExpenses from "./selector/expenses";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import { history } from "./routers";
import Loader from "./component/loader";

const store = configureStore();

// store.dispatch(addExpense({description: "water bill", amount : 5000, createdAt : 20}));
// store.dispatch(addExpense({description: "gas bill", amount : 3500, createdAt : 10}));
// store.dispatch(addExpense({description: "rent", amount : 104500, createdAt : 10}));
// store.dispatch(setTextFilter('water'));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expense, state.filters);
// console.log(visibleExpenses);

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

ReactDOM.render(<Loader />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user.uid);
    store.dispatch(login(user));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    });
    // console.log("log in");
    if (history.location.pathname === "/") {
      history.push("/main");
    }
  } else {
    store.dispatch(logout());
    history.push("/");
    renderApp();
    // console.log("log out");
  }
});
