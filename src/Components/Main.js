import React, { Component } from 'react';
import '../Styles/Main.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} 
  from 'reactstrap';

class Main extends Component {
  render() {
    return (
      <Router>
      <div className="Main">
        
        <Navbar color="faded" light expand="md">
               <NavbarBrand href="/">
                just ask.io
            </NavbarBrand>

            <Nav className="ml-auto" navbar>
                <NavItem className="Login">
                    <Link to="/login">Log In</Link>
                </NavItem>
            </Nav>

            <Nav navbar>
              <NavItem className="Signup">
                    <Link to="/signup">Sign Up</Link>
                </NavItem>
            </Nav>
        </Navbar>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />




       
        <Footer />
      </div>
      </Router>
    );
  }
}

export default Main;
