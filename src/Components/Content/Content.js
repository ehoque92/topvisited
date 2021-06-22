import React, { Component } from "react";
import reset from "../../Images/reset.svg";
import './Content.scss';

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>Most</strong> Visited Websites:
        </p>
        <button className='resetAllBtn'><img src={reset} alt='reset' style={{color: "white"}}/> Reset All Counters</button>
        <hr style={{ width: "200px" }} />
      </div>
    );
  }
}

export default Content;
