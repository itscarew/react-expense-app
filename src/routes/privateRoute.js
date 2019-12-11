import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../component/header";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      !isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <div>
          <Header /> <Component {...props} />
        </div>
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps)(PrivateRoute);
