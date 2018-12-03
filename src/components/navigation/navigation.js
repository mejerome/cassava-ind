import React, { Component } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "./navigation.css";

class Navi extends Component {
  render() {
    return (
      <div>
        <div className="bg-white black-80 tc pv4">
          <img
            src={logo}
            alt=""
            className="mt2 mb0 f6 fw4 ttu tracked"
            height="80"
            width="80"
          />
          <h2 id="cassava" className="mt2 mb0 f2 fw ttu tracked">
            Cassava Industries, LDA.
          </h2>
        </div>
        <nav className="bt bb  tc mw7 center mt1 navi-font fw6">
          <Link
            className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
            to="/"
          >
            Home
          </Link>
          <Link
            className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
            to="/product"
          >
            Our Products
          </Link>

          <Link
            className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
            to="/contact"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navi;
