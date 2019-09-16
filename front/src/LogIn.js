import React from "react";

import "./css/LogIn.css";

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      nadaPorAhora: ""
    };
  }

  // Code Review by @dnarvaez27: Burned Credentials
  getUser = () =>{
    this.props.changeState("Jesús Orlando Cárcamo Posada", "jo.carcamo@uniandes.edu.co",
      "123", "2001-15-02");
  };

  render(){
    if(this.props.show===true){
      return(
      <div className="LogIn">
        <div className="Inputs">
          <h1>LogIn</h1>
          <input type="text"
            placeholder="Correo"
          />
          <input type="password"
            placeholder="Contraseña"
          />
          <button id="btnLogInActive" onClick={this.getUser}>
            LogIn
          </button>
        </div>
        <div></div>
      </div>
      );
    }
    else{
      return(
        <div className="LogIn">
          <button id="btnLogInInactive" onClick={this.props.onClick}>
              LogIn
          </button>
        </div>
      );
    }
  }
}

export default LogIn;
