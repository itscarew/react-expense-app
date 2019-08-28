import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <NavLink to="/">
          <h1 className="header__title">Expensify</h1>
        </NavLink>
        <div className="header__controller">
          <NavLink to="/main">DashBoard</NavLink>
          <NavLink to="/expense">Create Expense</NavLink>
          <button onClick={this.props.startLogout}>Logout</button>
        </div>
      </header>
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
