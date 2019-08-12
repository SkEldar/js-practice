import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

class Main extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h3>Company name</h3>
          <ul className="menu">
            <a href="#">
              <li>Features</li>
            </a>
            <a href="#">
              <li>Enterprise</li>
            </a>
            <a href="#">
              <li>Support</li>
            </a>
            <a href="#">
              <li>Pricing</li>
            </a>
          </ul>
          <button className="Sign_up">Sign up</button>
        </div>
        <div className="Main_content">
          <div className="container">
            <div className="text">
              <h1>Pricing</h1>
              <p>
                Quickly build an effective pricing table for your potential
                customers with this
              </p>

              <p>
                Bootstrap example. It's built with default Bootstrap components
                and utilities
              </p>

              <p> with little customization.</p>
            </div>
            <div className="Prices">
              <div className="Price" />
              <div className="Price" />
              <div className="Price" />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
