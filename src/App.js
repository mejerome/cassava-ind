import React, { Component } from "react";
import "./App.css";
import "tachyons";
import Main from "./components/main";
import Navi from "./components/navigation/navigation";
import Footer from "./components/Footer/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navi />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
