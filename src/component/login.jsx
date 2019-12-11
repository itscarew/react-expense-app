import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import google from "../assets/google.png";

const Login = ({ startLogin }) => {
  return (
    <div className="login">
      <div className="login__content">
        <h1 className="login__content_title">Expensify App </h1>
        <p className="login__content_intro">Built with React and Firebase</p>
        <button className="login__content_button" onClick={startLogin}>
          <img src={google} alt="logo" />
          <span> Sign In with Google</span>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(Login);
