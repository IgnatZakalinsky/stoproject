import React, {useEffect } from 'react';
import Order from "../orders/Order";
import Car from "./Car";
import {connect} from "react-redux";
import {getOrders} from "../../Thunks/ordersThunks";
import {changeCar} from "../../reducers/carsReducer";

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
			{props.cars.map(c=><Car car={c} {...props} />)}
	       {order}
        </div>
    );
}

let mapStateToProps = (state) => {
	return {
		orders: state.orders.orders,
		isChangeCar: state.cars.isChangeCar
	};
};

 export default connect(mapStateToProps, {getOrders, changeCar})(Cars);

//export default Cars;

