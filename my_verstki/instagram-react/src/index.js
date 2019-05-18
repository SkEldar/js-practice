import React from "react";
import ReactDOM from "react-dom";
import Top_Menu from "./components/Top_Menu";
import "./style.css";
import Main_content from "./components/Main_content";

function Main() {
  return (
    <div>
      <Top_Menu />
      <Main_content />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
