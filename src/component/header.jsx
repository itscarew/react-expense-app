import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>
          DashBoard
        </NavLink>
        <NavLink activeClassName="is-active" to="/expense">
          Create Expense
        </NavLink>
        <NavLink activeClassName="is-active" to="/help">
          Help
        </NavLink>
      </div>
    );
  }
}

export default Header;
