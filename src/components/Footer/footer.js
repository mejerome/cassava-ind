import React, { Component } from "react";
import "tachyons";

class Footer extends Component {
  render() {
    return (
      <footer className="pv5 pv6-l ph4">
        <p className="f6">
          <span className="dib mr4 mr5-ns">©2018 CASSAVA INDUSTRIES, LDA.</span>
          <a className="link white-80 hover-light-purple" href="/terms">
            Terms
          </a>{" "}
          /
          <a className="link hover-gold" href="/privacy">
            {" "}
            Privacy{" "}
          </a>{" "}
          /
          <a className="link hover-green" href="/">
            info@cassavaindustries.com{" "}
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
