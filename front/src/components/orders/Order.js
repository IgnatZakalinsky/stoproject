import React from 'react';

function Order(props) {
	return (
		<div >
			<div>Order</div>
			<div><span>id: {props.id}</span></div>
			<div><span>carId: {props.carId}</span></div>
			<div><span>clientId: {props.clientId}</span></div>
			<div><span>amount: {props.amount}</span></div>
			<div>status: <span>{props.status}</span></div>
		</div>

	);
}

export default Order;