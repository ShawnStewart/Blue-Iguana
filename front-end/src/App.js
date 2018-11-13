import React, { Component } from "react";
import logo from "./logo.svg";

// Components
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";

// Styling
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
