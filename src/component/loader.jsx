import React from "react";
import loader from "../assets/laoder.gif";

const Loader = () => (
  <div className="loader">
    <div className="loader__img_conatainer">
      <img alt="loader" src={loader} />
    </div>
  </div>
);

export default Loader;
