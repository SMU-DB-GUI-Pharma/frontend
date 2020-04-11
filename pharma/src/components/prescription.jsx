import React, { Component } from "react";

class Prescription extends Component {
  state = {
    name: "Adderall",
    date: "05-05-2020",
    Rx: "90mg",
    Address: "430 California Terrace",
    Age: "18",
  };

  styles = {
    fontSize: 12,
  };

  render() {
    return (
      <div>
        <p className="m-2">
          Name: {this.state.name} <br />
          Date: {this.state.date} <br />
          Rx: {this.state.Rx} <br />
          Address: {this.state.Address} <br />
          Age: {this.state.Age}
        </p>
      </div>
    );
  }
}

export default Prescription;
