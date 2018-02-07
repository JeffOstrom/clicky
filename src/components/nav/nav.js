import React from "react";
import "./nav.css";

const Nav = props => (
    <nav className="navbar"> This is my nav bar {props.name} SCORE: {props.score}</nav>
);

export default Nav; 