import React from 'react';
import Titles from "./Component/Titles";
import Form from "./Component/Form";
import Weather from "./Component/Weather";


const API_KEY = 'na';
class App extends React.Component{

  state = {
      Temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined



  }
  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      console.log(data);
      this.setState({
        city: data.name,
        Temperature: data.main.temp,
        country: data.sys.country
      });

  }
    render(){
      return(
      <div>
        <Titles></Titles>
        <Form getweather={this.getweather}></Form>
        <Weather></Weather>
      </div>

      );


    }

};

export default App;
