import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/main">
          DashBoard
        </NavLink>
        <NavLink activeClassName="is-active" to="/expense">
          Create Expense
        </NavLink>
        <NavLink activeClassName="is-active" to="/help">
          Help
        </NavLink>
        <button onClick={this.props.startLogout}>Logout</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
