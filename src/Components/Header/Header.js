/*global chrome*/
import React, { Component } from "react";
import logo from "../../Images/logo.svg";
import reset from "../../Images/reset.svg";
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log(chrome);

}
  
  render() {
    let counter = 5;

    return (
      <div className='header'>
        <p>
          <img src={logo} alt="logo" /> <strong>Top</strong>Visited
        </p>
        <p>You've visited this site</p>
        <h2><span className="counter">{counter}</span> Times   <button className='resetBtn'><img src={reset} alt='reset' style={{color: "white"}}/> Reset</button></h2>
        <hr style={{ width: "200px" }} />
      </div>
    );
  }
}

export default Header;
