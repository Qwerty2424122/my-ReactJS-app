import React from 'react';
import Titles from "./Component/Titles";
import Form from "./Component/Form";
import Weather from "./Component/Weather";


const API_KEY = 'f24119190d08363e415dd6375c6d4c27';
class App extends React.Component{

  getweather = async () => {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,UK&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      console.log(data);

  }
    render(){
      return(
      <div>
        <Titles></Titles>
        <Form></Form>
        <Weather></Weather>
      </div>

      );


    }

};

export default App;