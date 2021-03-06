import React from "react";
import ReactDOM from "react-dom";
import Top_Menu from "./components/Top_Menu";
import "./style.css";
import Main_content from "./components/Main_content";
import Second_content from "./components/Second_content";

function Main() {
  return (
    <div className="background">
      <Top_Menu />
      <Main_content />
      <Second_content />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
