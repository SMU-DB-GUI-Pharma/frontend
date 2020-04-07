import React from "react";
import ReactDOM from "react-dom";

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
