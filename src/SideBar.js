import { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div className="side-bar-container">
        <div className="logo-container">LOGO</div>
        <div className="buttons">
          <button>BUTTON</button>
          <button>BUTTON</button>
          <button>BUTTON</button>
          <button>BUTTON</button>
          <button>BUTTON</button>
        </div>
        <div className="logo-container">LOGO</div>
      </div>
    );
  }
}
