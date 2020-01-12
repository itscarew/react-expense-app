import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import google from "../assets/google.png";
import Phone from "../assets/Home-Iphone-Two.png";
import { Link } from "react-router-dom";

const Login = ({ startLogin }) => {
  return (
    <div className="login">
      <div className="contain">
        <div className="login__nav">
          <h1>
            {" "}
            <Link to="/"> Expensify. </Link>{" "}
          </h1>
          <ul>
            <li>
              {" "}
              <a href="#benefits"> Benefits </a>{" "}
            </li>
            <li>
              {" "}
              <Link to="/"> Download App </Link>{" "}
            </li>
            <li onClick={startLogin}>
              Login <img src={google} alt="logo" />{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="login__main">
        <div className="contain">
          <div className="login__main_items">
            <div className="login__main_items_text">
              <span>Expenses</span> <span>Reimagined</span>{" "}
            </div>
            <img src={Phone} alt="phone" />
          </div>
        </div>
      </div>

      <div className="login__benefits" id="benefits">
        <div className="contain">
          <div className="login__benefits_items">
            <div>
              <h2>Calender Help</h2>
              <p>
                Lorem ipsum color sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div>
              <h2> Very Fast In Usage </h2>
              <p>
                Lorem ipsum color sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div>
              <h2>Flexibility</h2>
              <p>
                Lorem ipsum color sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(Login);
