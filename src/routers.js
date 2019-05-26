import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/header";
import Main from "./component/main";
import Edit from "./component/edit";
import HelpPage from "./component/helppage";
import PageNotFound from "./component/pagenotfound";
import AddExpense from "./component/addExpensePage";
import Login from "./component/login";

const Routers = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/main" component={Main} />
          <Route path="/expense" component={AddExpense} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/help" component={HelpPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routers;
