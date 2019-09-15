import React from "react";
import "./css/Event.css";

class PopularEvents extends React.Component{
  constructor(props){
    super(props);
    this.state={
      popular_events:[
        {name:"Ocio Uniandes", description:"Ven a jugar D&D"},
        {name:"Kendo Uniandes", description:"Entrenamientos todos los martes!"},
      ]
    };
  }

  componentDidMount(){
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

  handleOnClick = (e) =>{
    console.log(e.currentTarget);
    console.log("Texto: " + e.currentTarget.innerHTML);
    let clickedEvent = this.state.popular_events.filter( event =>
        event.name === e.currentTarget.innerHTML
    );
    this.props.onClick(clickedEvent[0]);
  };

  render(){
    let eventsFiltered = [];
    let filter = this.props.filter;
    let onClick = this.props.onClick;
    let events;

    if(filter !== undefined){
        eventsFiltered = this.state.popular_events.filter( event =>
            event.name.includes(filter) || event.description.includes(filter)
            || event.date.includes(filter)
        );

        events = eventsFiltered.map((event, index) =>
          <div key={index}>
            <h2 onClick={this.handleOnClick} class="EventName">{event.name}</h2>
            <p>{event.description}</p>
          </div>
        );

    }
    else{
      events = this.state.popular_events.map((event, index) =>
        <div key={index}>
          <h2 onClick={this.handleOnClick} class="EventName"> {event.name}</h2>
          <p>{event.description}</p>
        </div>
      );
    }

    return(
      <div className="PopularEvents">
        <h1>Eventos De la semana</h1>
        {events}
      </div>

    );
  }

}

export default PopularEvents;