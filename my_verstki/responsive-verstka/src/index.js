import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

class Main extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="branding">
            <h3>Company name</h3>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Enterprise</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </nav>
          <button className="Sign_up">Sign up</button>
        </header>
        <section className="main_content">
          <div className="container">
            <div className="text">
              <h1>Pricing</h1>
              <p>
                Quickly build an effective pricing table for your potential
                customers with this
                <br /> Bootstrap example. It's built with default Bootstrap
                components and utilities
                <br /> with little customization.
              </p>
            </div>
            <div className="blocks">
              <div className="block">
                <div className="block-header">
                  <h4>Free</h4>
                </div>
              </div>
              <div className="block">
                <div className="block-header">
                  <h4>Pro</h4>
                </div>
              </div>
              <div className="block">
                <div className="block-header">
                  <h4>Enterprise</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
