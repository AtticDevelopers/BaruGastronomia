import React, { Component } from "react";

import { SIDEMENU } from "utils/constants";

import "./SideMenuHeader.scss";

class SideMenuHeader extends Component {
  render() {
    return (
      <div className="SideMenuHeader">
        <div className="CloseButton" onClick={this.props.closeMenu}>
          {" "}
          {SIDEMENU.cross}{" "}
        </div>
        <h2 className="Title"> {this.props.menuTitle} </h2>
      </div>
    );
  }
}

export default SideMenuHeader;