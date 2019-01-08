import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Button = props =>  {
    return (
    <div className="Buttonstyle">
      <Link to="/">Button Text Goes Here</Link>
    </div>
    )
}

export default Button;