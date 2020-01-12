import React from "react";
import LoaderGif from "../assets/laoder.gif";

const Loader = () => (
  <div className="loader">
    <div className="loader__img_conatainer">
      <img src={LoaderGif} alt="loader" />
    </div>
  </div>
);

export default Loader;
