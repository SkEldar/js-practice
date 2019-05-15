import React from "react";
import ReactDOM from "react-dom";
import Top_Menu from "./components/Top_Menu";

function Main() {
  return (
    <div>
      <Top_Menu />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
