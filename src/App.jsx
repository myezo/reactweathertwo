import React, { Component } from 'react';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import CustomNav from './components/CustomNav';


const API_KEY = '11e28d64554d3afa';
//http://api.wunderground.com/api/11e28d64554d3afa/conditions/q/CA/San_Francisco.json


class App extends Component {
  state = {
      temperature: undefined,
      city: undefined,
      state: undefined,
      description: undefined,
      error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
    const api_call = await fetch(`http://api.wunderground.com/api/${API_KEY}/conditions/q/${state}/${city}.json`);
    const data = await api_call.json();
    if(city && state){
      console.log(data);
      this.setState({
        temperature: data.current_observation.temp_f,
        city: data.current_observation.observation_location.city,
        state: data.current_observation.observation_location.state,
        description: data.current_observation.weather,
        image: data.current_observation.icon_url,
        error: ""
      })
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        state: undefined,
        description: undefined,
        image: undefined,
        error: "Please enter a City and State."
      });
    }
  }

  render() {
    return (
      <div>
        <CustomNav />
        <h1>React Weather U.S.</h1>
        <WeatherForm getWeather={this.getWeather}/>
          <Weather 
            temperature={this.state.temperature}
            city={this.state.city}
            state={this.state.state}
            description={this.state.description}
            image={this.state.image}
            error={this.state.error}
          />
      </div>
    );
  }
}

export default App;
