import React from "react";

import "./css/ProfileBar.css";

class ProfileBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className="ProfileBar">
      <h4>Nombre: {this.props.name}</h4>
      <h4>Edad: {this.props.age}</h4>
      <button>Configuracion</button>
      <h4>Eventos</h4>
      <ul>
        <li><button>Administrados</button></li>
        <li><button>Inscritos</button></li>
      </ul>
      <button>Log Out</button>
    </div>
    );
  }

}

export default ProfileBar;