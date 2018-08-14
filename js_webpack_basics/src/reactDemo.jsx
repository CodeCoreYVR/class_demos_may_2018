import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = props => {
  return <h2>Hello, {props.name}! 👋</h2>;
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <HelloWorld name="Vancouver" />,
    document.body.appendChild(document.createElement("div"))
  );
});
