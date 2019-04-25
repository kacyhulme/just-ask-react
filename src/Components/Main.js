import React, { Component } from "react";
import "../Styles/Main.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Login from "./Login";
import SignupWizard from "./SignupWizard";
import Home from "./Home";
import DataRepresentation from "./DataRepresentation";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">just ask.io</NavbarBrand>

            <Nav className="ml-auto" navbar>
              <NavItem className="login">
                <Link to="/login">Log In</Link>
              </NavItem>
            </Nav>

            <Nav navbar>
              <NavItem className="signup">
                <Link to="/signup">Sign Up</Link>
              </NavItem>
            </Nav>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignupWizard} />
          <Route path="/datarepresentation" component={DataRepresentation} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default Main;
