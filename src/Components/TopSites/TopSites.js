/*global chrome*/
import React, { Component } from "react";
import "./TopSites.scss";

export class TopSites extends Component {
  constructor(props) {
    super(props);
    this.buildPopupDom = this.buildPopupDom.bind(this);
  }

  buildPopupDom(mostVisitedURLs) {
    var popupDiv = document.getElementById("mostVisited_div");
    var ul = popupDiv.appendChild(document.createElement("ul"));

    for (var i = 0; i < 5; i++) {
      var li = ul.appendChild(document.createElement("li"));
      li.appendChild(document.createTextNode(mostVisitedURLs[i].title));

      // Get visit number test
      // console.log(chrome.history);
      // var url = mostVisitedURLs[i].url;
      // chrome.history.getVisits({ url: url }, function (url, visitItem) {
      //   var urlToCount = {};
      //   console.log(visitItem);
      //   for (var i = 0, ie = visitItem.length; i < ie; ++i) {
      //     if (!urlToCount[url]) {
      //       urlToCount[url] = 0;
      //     }
      //     urlToCount[url]++;
      //   }
      //   console.log(urlToCount);
      // });
    }
  }

  componentDidMount() {
    chrome.topSites.get(this.buildPopupDom);
  }

  render() {
    return <div id="mostVisited_div"></div>;
  }
}

export default TopSites;
