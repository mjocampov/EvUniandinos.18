import React from "react";

import "./css/SignUp.css";

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      nameUserInput: "",
      emailUserInput: "",
      passwordUserInput: "",
      birthdateUserInput: ""
    };
  }

  postUser = () => {
    fetch("/users", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(
      {
        name: this.state.nameUserInput,
        mail: this.state.emailUserInput,
        password: this.state.passwordUserInput,
        birthdate: this.state.birthdateUserInput,
        schedule:[]
      }

      ), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response =>
      console.log('Success:', response),
      console.log("En SignUp: " + this.state.nameUserInput + " " + this.state.emailUserInput + " " +
       this.state.passwordUserInput + " " + this.state.birthdateUserInput),
      this.props.changeState(this.state.nameUserInput, this.state.emailUserInput,
        this.state.passwordUserInput, this.state.birthdateUserInput),
    );
  };

  handleNameUserInput = (e) =>{
    this.setState({nameUserInput: e.target.value});
  };

  handleEmailUserInput = (e) =>{
    this.setState({emailUserInput: e.target.value});
  };

   handlePasswordUserInput = (e) =>{
    this.setState({passwordUserInput: e.target.value});
  };

  handleBirthdateUserInput = (e) =>{
    this.setState({birthdateUserInput: e.target.value});
  };

  render(){
    if(this.props.show===true){
      return(
      <div className="SignUp">
        <div className="Inputs">
          <h1>Sign Up</h1>
          <input type="text"
            placeholder="Nombre"
            onChange={this.handleNameUserInput}
            value={this.state.nameUserInput}
          />
          <input type="text"
            placeholder="Correo"
            onChange={this.handleEmailUserInput}
            value={this.state.emailUserInput}
          />
          <input type="password"
            placeholder="Contraseña"
            onChange={this.handlePasswordUserInput}
            value={this.state.passwordUserInput}
          />
          <label htmlFor="birthdateInput">Fecha de nacimiento: </label>
          <input type="date"
            id="birthdateInput"
            placeholder="Fecha de Nacimiento"
            onChange={this.handleBirthdateUserInput}
            value={this.state.birthdateUserInput}
          />
          <button id="btnSignUpActive" onClick={this.postUser}>
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