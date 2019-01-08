import React, { Component } from 'react';
import '../Styles/Main.css';
import Navigation from './Navigation';
import Hero from './Hero';
import TryItNow from './TryItNow';
import Faq from './Faq';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
      <div className="Main">
        <Navigation />
        <Hero />
        <TryItNow />
        <Faq />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default Main;
