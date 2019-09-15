import React from "react";
import ReactDOM from "react-dom";

import PopularEvents from "./PopularEvents.js";
import SessionBar from "./SessionBar.js";
import ProfileBar from "./ProfileBar.js";
import SearchBar from "./SearchBar.js";
import Event from "./Event.js";

import "./css/app.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      estado: "EventOverview"
    }
  };


  render(){
    if(this.state.estado==="LogIn"){
      return(
        <div className="AppLogIn">
          <PopularEvents />
          <SessionBar />
        </div>
      );
    }
    else if(this.state.estado==="Home"){
      return(
        <div className="AppHome">
          <ProfileBar />
          <SearchBar />
          <PopularEvents />
        </div>
      );
    }
    else if(this.state.estado==="EventOverview"){
      return(
        <div className="AppHome">
          <ProfileBar />
          <Event
            name="Kendo"
            topic="Deportes"
            date="17/09/2019"
            description="Ven a practicar con nosotros!"
            place="CentroDeprotivo - Canchas de Squash"
            cupos={20}
            calificacion={4}
          />
        </div>
      );
    }
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);