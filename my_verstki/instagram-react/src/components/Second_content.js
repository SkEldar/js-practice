import React from "react";
import img from "../img/chill.jpg";

function Second_content() {
  return (
    <div>
      <div className="nickname-account">
        <img src={img} alt="logo-of-your-acc" className="logo-of-your-acc" />
        <p>kent.your</p>
      </div>
      <div className="recomendations" />
    </div>
  );
}

export default Second_content;
