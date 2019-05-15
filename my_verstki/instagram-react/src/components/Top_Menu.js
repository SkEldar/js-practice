import React from "react";
import logo from "../img/logo-instagram.jpeg";
function Top_Menu() {
  return (
    <div className="menu">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <input type="text" />
      <ul>
        <li>
          <a href="#" />
        </li>
        <li>
          <a href="#" />
        </li>
        <li>
          <a href="#" />
        </li>
      </ul>
    </div>
  );
}

export default Top_Menu;
