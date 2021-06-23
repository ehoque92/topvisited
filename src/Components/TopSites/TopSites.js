/*global chrome*/
import React, { Component } from "react";

export class TopSites extends Component {
  constructor(props) {
    super(props);
    // this.onAnchorClick = this.onAnchorClick.bind(this);
    this.buildPopupDom = this.buildPopupDom.bind(this);
  }

  // onAnchorClick(event) {
  //   chrome.tabs.create({ url: event.srcElement.href });
  //   return false;
  // }

  buildPopupDom(mostVisitedURLs) {
    var popupDiv = document.getElementById("mostVisited_div");
    var ol = popupDiv.appendChild(document.createElement("ol"));

    for (var i = 0; i < mostVisitedURLs.length; i++) {
      var li = ol.appendChild(document.createElement("li"));
      var a = li.appendChild(document.createElement("a"));
      a.href = mostVisitedURLs[i].url;
      a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
      // a.addEventListener("click", this.onAnchorClick);
    }
  }

  componentDidMount(){
    chrome.topSites.get(this.buildPopupDom);
  }

  render() {
    return (
   
        <div id="mostVisited_div"></div>
      
    );
  }
}

export default TopSites;
