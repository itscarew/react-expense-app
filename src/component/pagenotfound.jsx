import React from "react";
import { Link } from "react-router-dom";

const PageNotFoud = () => {
  return (
    <div className="pnf">
      <h1>Oooops.... 404! </h1>
      <h3>You entered the wrong route </h3>
      <Link to="/">Go back to dashboard</Link>
    </div>
  );
};

export default PageNotFoud;
