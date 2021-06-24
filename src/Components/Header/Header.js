import React, { Component } from "react";
import logo from "../../Images/logo.svg";
import reset from "../../Images/reset.svg";
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 10}; //for example
    this.resetCounter = this.resetCounter.bind(this);

  }

  resetCounter(){
    this.setState({counter: 0})
  }
  
  
  render() {
    return (
      <div className='header'>
        <p>
          <img src={logo} alt="logo" /> <strong>Top</strong>Visited
        </p>
        <p>You've visited this site</p>
        <h2><span className="counter">{this.state.counter}</span> Times   <button className='resetBtn' onClick={this.resetCounter}><img src={reset} alt='reset' /> Reset</button></h2>
        <hr /> 
      </div>
    );
  }
}

export default Header;
