import React from 'react';

function Car(props) {
	return (
		<div >
			<div>Car</div>
			<div><span>id: {props.id}</span></div>
			<div><span>clientId: {props.clientId}</span></div>
			<div><span>make: {props.make}</span></div>
			<div><span>model: {props.model}</span></div>
			<div><span>year: {props.year}</span></div>
			<div><span>vin: {props.vin}</span></div>
		</div>

	);
}

export default Car;