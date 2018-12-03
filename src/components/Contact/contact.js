import React, { Component } from "react";
import "./contact.css";
import factory from "./factory.png";
import entrance from "./entrance.png";
import email from "./mail-icon-logo.png";
import phone from "./phone-icon.png";

class Contact extends Component {
  render() {
    return (
      <div>
        <main className="mw9 center ph0-ns">
          <div className="cf ph0-ns">
            <div className="fl w-100 pa0">
              <a href="/" className="pv0 no-underline black">
                <img className=" w-60-ns" src={factory} alt="" height="400px" />
              </a>
              <a href="/" className="no-underline  grow">
                <img className="w-40-ns" src={entrance} alt="" height="400px" />
              </a>
            </div>
            <div className="fl w-100 center pa4">
              <img src={email} alt="" height="50px" /> &nbsp;
              <a
                class="f4 fw6 black link hover-green"
                href="mailto:info@cassavaindustrieslda.com"
              >
                info@cassavaindustrieslda.com{" "}
              </a>{" "}
              <br />
              <img src={phone} alt="" height="50px" /> &nbsp;
              <a class="f4 fw6 black link hover-green" href="/">
                Tel: +222 222 2222
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Contact;
