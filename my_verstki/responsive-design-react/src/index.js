import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import header from "./images/header.svg";
import content from "./images/content.svg";
import sign_up from "./images/sign-up.svg";
import feature from "./images/feature.svg";

class Main extends Component {
  render() {
    return (
      <div className="background">
        <div className="page">
          <div className="section menu" />
          <div className="section header">
            <img src={header} />
          </div>
          <div className="section content">
            <img src={content} />
          </div>
          <div className="section sign-up">
            <img src={sign_up} />
          </div>
          <div className="section feature-1">
            <img src={feature} />
          </div>
          <div className="section feature-2">
            <img src={feature} />
          </div>
          <div className="section feature-3">
            <img src={feature} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
