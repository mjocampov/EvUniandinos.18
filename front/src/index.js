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
      user:{}
    }
  };

  changeStateToHome = (userName, userMail, userPassword, userBirthday) =>{
    this.setState({
      estado:"Home",
      user:{
        name: userName,
        mail: userMail,
        password: userPassword,
        bithday: userBirthday
      }
    });
  };


  render(){
    console.log(this.state);
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
      let userMail = this.state.user.email;
      let userBirthday = this.state.user.birthday;
      console.log("Index.state: " + this.state.user.name + this.state.user.email + this.state.user.birthday)
      return(
        <div className="AppHome">
          <ProfileBar name={userName} mail={userMail} birthday={userBirthday}/>
          <div>
            <SearchBar />
            <PopularEvents />
          </div>
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