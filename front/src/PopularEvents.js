import React from "react";

class PopularEvents extends React.Component{
  constructor(props){
    super(props);
    this.state={
      popular_events:[]
    };
  }

  componentWillMount(){
    this.setState({
      popular_events:[
        {name:"Ocio Uniandes", description:"Ven a jugar D&D"},
        {name:"Kendo Uniandes", description:"Entrenamientos todos los martes!"},
      ]
    });
  }

  componentDidMount(){
    console.log("llegue aki");
    fetch("/events")
      .then(res =>
        res.json()
        )
      .then(eventos =>
        this.setState({
          popular_events: eventos
        })
      );
  }

  render(){
    let events = this.state.popular_events.map((event, index) =>
      <div id="index">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
      </div>
    );

    return(
      <div className="PopularEvents">
        <h1>Eventos De la semana</h1>
        {events}
      </div>

    );
  }

}

export default PopularEvents;