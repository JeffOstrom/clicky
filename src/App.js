import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/nav";
import Button from "./components/button";

class App extends Component {
    // This initiallizes any state data
   state = {
      score:0
    };

    // method to pass to button onClick
    // So when button is clicked we mutate this.state.score
    buttonClick = ()=>{

      console.log("button Clicked");
      this.setState({score: this.state.score + 1});
    };


  render() {

    console.log("RENDERING PAGE");
    return (
      // {Return can only return single element so we wrap in div}
      <div className="App">
        <NavBar name="Jeff" score={this.state.score}/>
        <p className="App-intro">

     Click the button to update the score
       </p>
      <Button click={this.buttonClick}/>
      </div>

    );
  }
}

export default App;
