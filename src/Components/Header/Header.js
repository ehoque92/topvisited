import React, { Component } from "react";
import logo from "./logo.svg";

class Header extends Component {


  render() {
    return (
      <div>
        <p>
          <img src={logo} alt="logo" /> <strong>Top</strong>Visited
        </p>
        <p>You've visited this site:</p>
        <h1> Times</h1>
        <button>Reset</button>
        <hr style={{ width: "200px" }} />
      </div>
    );
  }
}

export default Header;
