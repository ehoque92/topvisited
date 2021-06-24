import React, { Component } from "react";
import reset from "../../Images/reset.svg";
import TopSites from "../TopSites/TopSites";
import './Content.scss';

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>Most</strong> Visited Websites:
        </p>
        <TopSites/>
        <button className='resetAllBtn'><img src={reset} alt='reset' style={{color: "white"}}/> Reset All Counters</button>
        <hr/>
      </div>
    );
  }
}

export default Content;
