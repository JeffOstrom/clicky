import React from "react";
import "./nav.css";

const Nav = props => (
    <nav className="navbar"> My total score update {props.name} SCORE: {props.score}</nav>
);

export default Nav; 