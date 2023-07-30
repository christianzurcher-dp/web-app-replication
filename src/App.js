import { Component } from "react";
import "./App.scss";
import Header from "./Header";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
import Footer from "./Footer";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="page-content">
          <Header />
          <MainBody />
          <Footer />
        </div>
      </div>
    );
  }
}
