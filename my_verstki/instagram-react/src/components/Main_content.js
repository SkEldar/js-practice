import React from "react";
function New_img() {
  console.log(1);
}
function Main_content() {
  return (
    <div>
      <div className="Main_content">
        <div className="profile">
          <a href="#">kent.your</a>
          <a href="#">...</a>
          <div onClick={New_img} className="img">
            <img />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_content;
