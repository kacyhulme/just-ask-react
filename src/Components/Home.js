import React from 'react';
import Hero from './Hero';
import TryItNow from './TryItNow';
import Faq from './Faq';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = props =>  {
    return (
      <div>
        <Hero />
        <TryItNow />
        <Faq />
      </div>
    )
}

export default Home;