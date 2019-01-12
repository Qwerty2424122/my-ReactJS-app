import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function sayhello(){
    return <h1>Helloss</h1>
}


class App extends Component {
  render() {
    return (
    
      <div>
        <sayhello>hELjssss</sayhello>

      </div>
    );
  }
}

export default App;
