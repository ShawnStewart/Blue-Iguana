import React, { Component } from "react";
import Logo2 from "../../img/BICW-LOGO2.png";

// Styling
import "./navbar.css";

export default class nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: ""
    };
  }

  handleMenuItemClick = item => {
    this.setState({ activeMenuItem: item });
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar-header">
          <a
            href="localhost:3000"
            onClick={() => this.handleMenuItemClick("Home")}
          >
            <img className="navbar-logo" src={Logo2} alt="Logo" />
          </a>
        </div>
        <ul className="navbar-menu">
          <li>
            <a
              className={
                "navbar-menu-link" +
                (this.state.activeMenuItem === "About" ? " active" : "")
              }
              href="localhost:3000"
              onClick={() => this.handleMenuItemClick("About")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={
                "navbar-menu-link" +
                (this.state.activeMenuItem === "Locations" ? " active" : "")
              }
              href="localhost:3000"
              onClick={() => this.handleMenuItemClick("Locations")}
            >
              Locations
            </a>
          </li>
          <li>
            <a
              className={
                "navbar-menu-link" +
                (this.state.activeMenuItem === "Fleet" ? " active" : "")
              }
              href="localhost:3000"
              onClick={() => this.handleMenuItemClick("Fleet")}
            >
              Fleet Programs
            </a>
          </li>
          <li>
            <a
              className={
                "navbar-menu-link" +
                (this.state.activeMenuItem === "Clubs" ? " active" : "")
              }
              href="localhost:3000"
              onClick={() => this.handleMenuItemClick("Clubs")}
            >
              Clubs
            </a>
          </li>
          <li>
            <a
              className={
                "navbar-menu-link" +
                (this.state.activeMenuItem === "Fundraisers" ? " active" : "")
              }
              href="localhost:3000"
              onClick={() => this.handleMenuItemClick("Fundraisers")}
            >
              Fundraisers
            </a>
          </li>
          <li>
            <a
              className={
                "navbar-menu-link" +
                (this.state.activeMenuItem === "Contact" ? " active" : "")
              }
              href="localhost:3000"
              onClick={() => this.handleMenuItemClick("Contact")}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
