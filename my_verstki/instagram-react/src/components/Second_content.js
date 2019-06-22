import React from "react";
import img from "../img/chilll.jpg";

function Second_content() {
  return (
    <div>
      <div className="nickname-account">
        <img src={img} alt="logo-of-your-acc" className="logo-of-your-acc" />
        <p>kent.your</p>
      </div>
      <div className="recomendations">
        <p>Рекомендации для вас</p>
      </div>
    </div>
  );
}

export default Second_content;
