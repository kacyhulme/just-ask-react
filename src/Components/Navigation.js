import React from 'react';
import Login from './Login';
import Signup from './Signup';
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

export default class Navigation extends React.Component {

  render() {
    return (
        <div>
         <Navbar color="faded" light expand="md">
               <NavbarBrand href="/">
                just ask.io
            </NavbarBrand>

            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link to="/login">Log In</Link>
                </NavItem>
            </Nav>

            <Nav className="mr-auto" navbar>
              <NavItem>
                    <Link to="/signup">Sign Up</Link>
                </NavItem>
            </Nav>
        </Navbar>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        </div>
    );
  }
}
