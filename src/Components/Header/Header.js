/*global chrome*/
import React, { Component } from "react";
import logo from "../../Images/logo.svg";
import reset from "../../Images/reset.svg";
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 10};

  }
  
  
  render() {
    return (
      <div className='header'>
        <p>
          <img src={logo} alt="logo" /> <strong>Top</strong>Visited
        </p>
        <p>You've visited this site</p>
        <h2><span className="counter">{this.state.counter}</span> Times   <button className='resetBtn'><img src={reset} alt='reset' style={{color: "white"}}/> Reset</button></h2>
        <hr style={{ width: "200px" }} />
      </div>
    );
  }
}

export default Header;
