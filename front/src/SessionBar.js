import React from "react";
import ReactDOM from "react-dom";

import "./css/SessionBar.css";
import LogIn from "./LogIn.js"
import SignUp from "./SignUp.js"

class SessionBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      signUp: true,
      logIn: false
    };
  }

  ChangeVisibility = () => {
    if(this.state.signUp===false){
      this.setState({
        signUp: true,
        logIn: false
      });
    }
    else{
      this.setState({
        signUp: false,
        logIn: true
      });
    }

  };

  render(){
    if(this.state.signUp == true){
      return(
        <div className="SessionBar">
          <SignUp show={true} onClick={this.ChangeVisibility} changeState={this.props.changeState}/>
          <LogIn show={false} onClick={this.ChangeVisibility}/>

        </div>
      );
    }
    else if(this.state.logIn == true){
      return(
        <div className="SessionBar">
          <LogIn show={true} onClick={this.ChangeVisibility} />
          <SignUp show={false} onClick={this.ChangeVisibility } changeState={this.props.changeState}/>
        </div>
      );
    }
  }
}

export default SessionBar;