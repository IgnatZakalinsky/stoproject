import React from 'react';

function Order(props) {
	return (
		<div >
			<span>id: </span><div>{props.id}</div>
			<span>carId: </span><div>{props.carId}</div>
			<span>clientId: </span><div>{props.clientId}</div>
			<span>amount: </span><div>{props.amount}</div>
			<span>status: </span><div>{props.status}</div>
		</div>

	);
}

export default Order;