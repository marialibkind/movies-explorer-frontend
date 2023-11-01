import React from "react";

const Preloader = (props) => {
  return (
    <div
      className={`preloader ${props.openPreloader ? "preloader_active" : ""}`}
    >
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
