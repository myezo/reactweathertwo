import React from 'react'

const Weather = (props) => {
	return (
		<div>
			{ props.image && <img src={props.image}></img> }
			{ props.city && props.state && <p>Location: {props.city}, {props.state}</p> }
			{ props.temperature && <p>Temperature: {props.temperature}</p>}
			{ props.description && <p>Conditions: {props.description}</p> }
			{ props.error && <p>{props.error}</p> }
		</div>
	);
}

export default Weather;