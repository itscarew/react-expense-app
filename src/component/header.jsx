import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  state = {};
  render() {
    const {
      startLogout,
      user: { photoURL }
    } = this.props;
    return (
      <header className="header">
        <NavLink to="/">
          <h1 className="header__title">Expensify App</h1>
        </NavLink>
        <div className="header__controller">
          <NavLink to="/main" activeClassName="isActive">
            <FontAwesomeIcon
              icon="tachometer-alt"
              size="sm"
              color="#232020"
              style={{ marginRight: "0.8rem" }}
            />
            <span> DashBoard </span>
          </NavLink>
          <NavLink to="/expense" activeClassName="isActive">
            <FontAwesomeIcon
              icon="plus-circle"
              size="sm"
              color="#232020"
              style={{ marginRight: "0.8rem" }}
            />
            <span> Create Expense</span>
          </NavLink>
          <NavLink to="/notifications" activeClassName="isActive">
            <FontAwesomeIcon
              icon="bell"
              size="sm"
              color="#232020"
              style={{ marginRight: "0.8rem" }}
            />
            <span> Notifications </span>
          </NavLink>
          <button onClick={startLogout}>
            <img src={photoURL} alt="Avatar of Jonathan Reinink" />
            <span> Logout </span>
          </button>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
