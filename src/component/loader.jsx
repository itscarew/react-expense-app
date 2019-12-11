import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => (
  <div className="loader">
    <div className="loader__img_conatainer">
      <FontAwesomeIcon icon="circle-notch" size="10x" color="#232020" spin />
    </div>
  </div>
);

export default Loader;
