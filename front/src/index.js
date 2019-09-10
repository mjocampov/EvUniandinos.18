import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
      super(props);
  }
    render(){
      return(
          <p>React es muy bacano </p>
      );
    };

};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);