import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Main from "./component/main";
import Edit from "./component/edit";
import HelpPage from "./component/helppage";
import PageNotFound from "./component/pagenotfound";
import AddExpense from "./component/addExpensePage";
import Login from "./component/login";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

export const history = createBrowserHistory();

export const Routers = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={Login} exact={true} />
          <PrivateRoute path="/main" component={Main} />
          <PrivateRoute path="/expense" component={AddExpense} />
          <PrivateRoute path="/edit/:id" component={Edit} />
          <PrivateRoute path="/help" component={HelpPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routers;
