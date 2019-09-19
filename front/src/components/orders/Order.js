import React from 'react';
import styles from  './Order.module.css'

function Order(props) {
	let editOrder = () =>{
         props.editModeSuccsess(props.id)
	}

	let deleteOrder = () =>{
		props.deleteOrder(props.id)
	}
	return (

		<div className={styles.order} >
			<div>Order</div>
			<div><span>id: {props.id}</span></div>
			<div><span>carId: {props.carId}</span></div>
			<div><span>clientId: {props.clientId}</span></div>
			<div><span>Date: {props.date}</span></div>

			<div><span>amount: {props.amount}</span></div>
			<div>status: <span>{props.status}</span></div>


			<button onClick={editOrder}>Edit</button>
			<button onClick={deleteOrder}>Delete</button>

		</div>

	);
}

export default Order;