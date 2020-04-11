import ReactDOM from "react-dom";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Prescriptions from "./components/prescriptions";

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

ReactDOM.render(<Prescriptions />, document.getElementById("root"));
