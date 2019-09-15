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
      estado: "LogIn",
      user:{},
      searchFilterValue: "",
      event:{}
    }
  };

  changeStateToHome = (userName, userMail, userPassword, userBirthday, events) =>{
    this.setState({
      estado:"Home",
      user:{
        name: userName,
        mail: userMail,
        password: userPassword,
        birthday: userBirthday,
        events: events
      }
    });
  };

  changeStateToEventOverview = (evento) =>{
    console.log(evento);
    this.setState({
      estado:"EventOverview",
      event:{
        name: evento.name,
        description: evento.description,
        topic: evento.topic,
        date: evento.date,
        interval: evento.interval,
        place: evento.place,
        cupos: evento.cupos,
        grade: evento.grade
      }
    });
  };

  handleChangeSearchFilter = (search) =>{
      this.setState({
          searchFilterValue: search
      });
  };


  render(){
      console.log(this.state.searchFilterValue);

    if(this.state.estado==="LogIn"){
      return(
        <div className="AppLogIn">
          <PopularEvents />
          <SessionBar changeState={this.changeStateToHome} />
        </div>
      );
    }
    else if(this.state.estado==="Home"){
      let userName = this.state.user.name;
      let userMail = this.state.user.mail;
      let userBirthday = this.state.user.birthday;

      console.log("Index Filter Value: " + this.state.searchFilterValue);
      return(
        <div className="AppHome">
          <ProfileBar name={userName} mail={userMail} birthday={userBirthday}/>
          <div>
            <SearchBar
                searchFilterValue={this.state.searchFilterValue}
                handleFilterTextChange = {this.handleChangeSearchFilter}
            />
            <PopularEvents
                filter={this.state.searchFilterValue}
                onClick={this.changeStateToEventOverview}
            />
          </div>
        </div>
      );
    }
    else if(this.state.estado==="EventOverview"){
      let event = this.state.event;
      let userName = this.state.user.name;
      let userMail = this.state.user.mail;
      let userBirthday = this.state.user.birthday;
      return(
        <div className="AppHome">
          <ProfileBar name={userName} mail={userMail} birthday={userBirthday}/>
          <Event
            name={event.name}
            topic={event.topic}
            date={event.date}
            description={event.description}
            place={event.place}
            cupos={event.cupos}
            calificacion={event.grade}
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