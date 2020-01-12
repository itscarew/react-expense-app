import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

class Header extends Component {
  state = {};
  render() {
    const {
      startLogout,
      user: { photoURL }
    } = this.props;
    return (
      <div className="contain">
        <div className="login__nav">
          <h1>
            {" "}
            <NavLink to="/main"> Expensify. </NavLink>{" "}
          </h1>
          <ul>
            <li>
              {" "}
              <NavLink to="/main"> DashBoard </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/expense"> Create Expense </NavLink>{" "}
            </li>
            <li onClick={startLogout}>
              Logout <img className="photoUrl" src={photoURL} alt="photoUrl" />{" "}
            </li>
          </ul>
        </div>
      </div>
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
