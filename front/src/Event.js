import React from "react";

class Event extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="Event">
        <h1>{this.props.name}</h1>
        <h5>{this.props.topic}</h5>
        <h3>{this.props.date}</h3>
        <p>{this.props.description}</p>
        <h2>{this.props.place}</h2>
        <h4>{this.props.cupos}</h4>
        <p>Calificacion: {this.props.calificacion}</p>
        <button>Asisitiré</button>
      </div>
    );
  }

}

export default Event;