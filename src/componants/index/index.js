import React, { Component } from "react";
import Home from "./../home/index";
import Footer from "./../footer/index";
import Portfolio from "./../portfolio/index";
import Profile from "./../profile/index";
import Socailmedia from "./../socailmedia/index";
import Work from "./../work/index";
import About from "./../about/index";

class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Socailmedia />
        <Footer />
      </div>
    );
  }
}

export default Index;
