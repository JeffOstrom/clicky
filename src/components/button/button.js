//sets up the component
import React from "react";
import "./button.css";


const Button = props => (
  <button onClick={props.click}>Click Me</button>
);

export default Button;