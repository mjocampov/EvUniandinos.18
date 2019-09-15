import React from "react";


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