import { Component } from "react";

export default class MainBody extends Component {
  render() {
    return (
      <div className="main-body-container">
        <div className="main-content">MAIN CONTENT</div>
        <div className="middle-content">
          <div className="content-container">MAIN CONTENT</div>
          <div className="image-container">IMAGE</div>
        </div>
        <div className="middle-content">
          <div className="image-container">IMAGE</div>
          <div className="content-container">MAIN CONTENT</div>
        </div>
        <div className="main-content">MAIN CONTENT</div>
        <button>BUTTON</button>
      </div>
    );
  }
}
