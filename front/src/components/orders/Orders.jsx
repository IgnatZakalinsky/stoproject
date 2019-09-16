import React, {useEffect } from 'react';
import {connect} from "react-redux";
import FindOrderForm from "../forms/FindClientForm";
import {getOrders} from "../../Thunks/ordersThunks";
import Order from "./Order";

function Orders(props) {

	const orders = props.orders.map(c => <Order {...c}/>);

	useEffect(() => {
		props.getOrders()
	}, []);

	let findOrder = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<FindOrderForm findOrder={findOrder}/>
			<div >
				{orders}
			</div>
		</>
	);
}

let mapStateToProps = (state) => {
	return {
		orders: state.orders.orders
	};
};

export default connect(mapStateToProps, {getOrders})(Orders);
