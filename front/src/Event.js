import React from "react";

function PutUserEventRelationship(){
    fetch("/users", {
      method: 'PUT', // or 'PUT'
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

const Event = (props) =>{
  return(
    <div className="Event">
      <h1>{props.name}</h1>
      <h5>{props.topic}</h5>
      <h3>{props.date}</h3>
      <p>{props.description}</p>
      <h2>{props.place}</h2>
      <h4>Cupos: {props.cupos}</h4>
      <p>Calificacion: {props.calificacion}</p>
      <button>Asisitiré</button>
    </div>
  );
}

export default Event;