import React from "react";

import "./css/ProfileBar.css";

class ProfileBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log("ProfileBar.props: " + this.props.name + this.props.mail+  this.props.birthday);
    return(
    <div className="ProfileBar">
      <h4>Nombre: {this.props.name}</h4>
      <h4>Correo: {this.props.mail}</h4>
      <h4>Fecha de Nacmiento: {this.props.birthday}</h4>
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