import React from "react";
import logo from "../img/logo-instagram.jpeg";
function Top_Menu() {
  return (
    <div className="menu">
      <a href="#">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <input type="text" className="search" />
      <ul className="top-menu">
        <li>
          <a href="#">Картинки нету</a>
        </li>
        <li>
          <a href="#">Картинки нету</a>
        </li>
        <li>
          <a href="#">Картинки нету</a>
        </li>
      </ul>
    </div>
  );
}

export default Top_Menu;
