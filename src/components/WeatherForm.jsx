import React from 'react'

class WeatherForm extends React.Component{
	render(){
		console.log("test")
		return (
			<form onSubmit={this.props.getWeather}>
				<input type="text" name="city" placeholder="City..."/>
				<input type="text" name="state" placeholder="State..."/>
				<button>Get Weather</button>
			</form>
		);
	}
}

export default WeatherForm;