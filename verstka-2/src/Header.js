import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="logo" />
        <div class="offer">
          <h1>Я УЧУ HTML5/CSS3</h1>
          <p>И мне это дается легко!</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
