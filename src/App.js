import React from "react";
import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function Index() {
  return <h2>Home</h2>;
}

function Files() {
  return <h2>Files</h2>;
}

function App() {
  const mystyle = {
    margin: "0 auto",
    width: "640px",
  };
  return (
    <Router>
      {/* <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprint</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal">
            <Link
                to="/"
                className="bp3-button bp3-minimal bp3-icon-home"
            >Home</Link>
          </Button>
          <Button className="bp3-minimal">
            <Link
                to="/files/"
                className="bp3-button bp3-minimal bp3-icon-document"
            >Files</Link>
          </Button>
        </Navbar.Group>
      </Navbar> */}
      <nav className="bp3-navbar bp3-dark">
        <div style={mystyle}>
          <div className="bp3-navbar-group bp3-align-left">
            <div className="bp3-navbar-heading">Blueprint</div>
            <input class="bp3-input" placeholder="Search files..." type="text" />
          </div>
          <div className="bp3-navbar-group bp3-align-right">
            <button className="bp3-button bp3-minimal bp3-icon-home">
              Home
            </button>
            <button className="bp3-button bp3-minimal bp3-icon-document">
              Files
            </button>
            <span className="bp3-navbar-divider"></span>
            <button className="bp3-button bp3-minimal bp3-icon-user"></button>
            <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
            <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route path="/" exact component={Index} />
        <Route path="/files/" component={Files} />
        <h1>React Electron</h1>
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
    </Router>
  );
}

export default App;
