import ReactDOM from "react-dom";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Welcome = () => {
  console.log("display welcome message");
  return (
    <>
      <h1>Welcome to Pharma</h1>
    </>
  );
};

const App = () => {
  return (
    <>
      <Welcome />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
