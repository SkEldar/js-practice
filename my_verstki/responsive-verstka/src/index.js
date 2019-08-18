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
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
