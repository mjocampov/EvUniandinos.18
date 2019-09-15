import React from "react";
import ReactDOM from "react-dom";

import "./css/SignUp.css";

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      nadaPorAhora: ""
    };
  }

  render(){

    if(this.props.show==true){
      return(
      <div className="SignUp">
        <div className="Inputs">
          <h1>Sign Up</h1>
          <input type="text"
            placeholder="Nombre"
          />
          <input type="text"
            placeholder="Correo"
          />
          <input type="password"
            placeholder="Contraseña"
          />
          <button id="btnSignUpActive">
            Sign Up
          </button>
        </div>
      </div>

      );
    }
    else{
      return(
        <div className="SignUp">
          <button id="btnSignUpInactive" onClick={this.props.onClick}>
              SignUp
          </button>
        </div>
      );
    }
  }
}

export default SignUp;