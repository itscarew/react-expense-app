import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="header-flex">
          <h1>Expensify</h1>
          <div className="links">
            <NavLink activeClassName="is-active" to="/main">
              DashBoard
            </NavLink>
            <NavLink activeClassName="is-active" to="/expense">
              Create Expense
            </NavLink>
          </div>
        </div>
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
