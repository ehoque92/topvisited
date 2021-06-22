import React, { Component } from "react";
import Switch from "react-switch";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div>
        <label>
          <span>Track Websites Visits </span><Switch onChange={this.handleChange} checked={this.state.checked} />
        </label>
      </div>
    );
  }
}

export default Footer;
