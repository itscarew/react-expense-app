import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const Login = ({ startLogin }) => {
  return (
    <div className="login-layout">
      <div className="login-layout-box">
        <h2>ItsCarew Expensify</h2>
        <p>Lets Help You get your expenses under control</p>
        <button onClick={startLogin}>Login With Google</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
