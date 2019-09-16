import React, {useEffect } from 'react';
import Order from "../orders/Order";
import Car from "./Car";
import {connect} from "react-redux";
import {getOrders} from "../../Thunks/ordersThunks";
import {changeCar} from "../../reducers/carsReducer";
import AddOrder from "../EditOrder/AddOrder";
import EditOrder from "../EditOrder/EditOrder";

function Cars(props) {

    //useE getOr(props.carId)

	// useEffect(() => {
	// 	props.getCars()
	// }, []);

    const order = props.orders.map(o => {
    	 if(o.editMode === true) return <EditOrder {...o}/>
    	return<Order {...o}/>});

	useEffect(() => {
		props.getOrders(props.id)
	}, [props.id])

    return (
        <div >
			{props.cars.map(c=><Car car={c} {...props} />)}
	       {order}
	       <AddOrder carId={props.id} clientId={props.clientId}/>

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

