import React, {useEffect } from 'react';
import Order from "../orders/Order";
import Car from "./Car";
import {connect} from "react-redux";
import {getClient} from "../../Thunks/clientsThunks";
import {getCar} from "../../Thunks/carsThunks";
import {getOrders} from "../../Thunks/ordersThunks";

function Cars(props) {

    //useE getOr(props.carId)

	// useEffect(() => {
	// 	props.getCars()
	// }, []);

    const order = props.orders.map(o => <Order {...o}/>);

	useEffect(() => {
		props.getOrders(props.id)
	}, [props.id])

    return (
        <div >
	       <Car {...props} />
	       {order}
        </div>
    );
}

let mapStateToProps = (state) => {
	return {
		orders: state.orders.orders
	};
};

 export default connect(mapStateToProps, {getOrders})(Cars);

//export default Cars;

