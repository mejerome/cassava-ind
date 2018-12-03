import React, { Component } from "react";
import "./about.css";
import "tachyons";

class About extends Component {
  render() {
    return (
      <div>
        <div className=" tc">
          <div className="about-image" />

          <h1 className="f1 lh-title">Our Objectives</h1>
          <div className="flex obj-font">
            <p className="w-25 bg-light-green hover-bg-near-white pa5 lh-copy">
              To set up an economically viable bio-degradable tableware and
              shopping bags production lines in Portugal using cassava starch as
              the major raw material.
            </p>
            <p className="w-25 pa5 hover-bg-light-blue lh-copy">
              To take advantage of European Union’s environmental protection
              concerns.
            </p>
            <p className="w-25 bg-light-green hover-bg-near-white pa5 lh-copy">
              To curb environmental pollution resulting from dumping of PE
              products.
            </p>
            <p className="w-25 pa5 hover-bg-light-blue lh-copy">
              To create a market for cassava farmers in West Africa.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
