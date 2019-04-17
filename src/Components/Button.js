import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Button = props =>  {
    return (
    <div className="buttonstyle">
      <Link to="/">{props.buttontext}</Link>
    </div>
    )
}

export default Button;