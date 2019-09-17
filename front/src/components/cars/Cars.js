import React, {useEffect } from 'react';
import Order from "../orders/Order";
import Car from "./Car";
import {connect} from "react-redux";
import {deleteOrder, getOrders} from "../../Thunks/ordersThunks";
import {addNewCarForm, changeCar} from "../../reducers/carsReducer";
import AddOrder from "../EditOrder/AddOrder";
import EditOrder from "../EditOrder/EditOrder";
import {updateCar} from "../../Thunks/carsThunks";
import {Field, reduxForm} from "redux-form";
import {editModeSuccsess} from "../../reducers/ordersReducer";

function Cars(props) {

    //useE getOr(props.carId)

    // useEffect(() => {
    // 	props.getCars()
    // }, []);

    const order = props.orders.map((o,i) => {
    	 if(o.editMode === true) return <EditOrder {...o} key={i} selectOrderSuccess={props.selectOrderSuccess} />
    	return<Order deleteOrder={props.deleteOrder} key={i} editModeSuccsess={props.editModeSuccsess} {...o}/>});

    useEffect(() => {
        props.getOrders(props.id)
    }, [props.id])

    let addNewCar = () => {
        props.addNewCarForm(false)
    }

    return (
        <div>
            {props.showFormAddNewCar
                ? <CarAddForm onSubmit={addNewCar}/>
                : <button onClick={()=>props.addNewCarForm(true)}>add new car </button>
            }


            {props.cars.map(c => <Car car={c} {...props} />)}
            {order}
            <AddOrder carId={props.id} clientId={props.clientId}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        orders: state.orders.orders,
        isChangeCar: state.cars.isChangeCar,
        showFormAddNewCar: state.cars.showFormAddNewCar
    };
};


let CarAddForm = props => {
    const {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="make">make:</label>
                <Field name="make" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="model">model:</label>
                <Field name="model" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="year">year:</label>
                <Field name="year" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="vin">vin:</label>
                <Field name="vin" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="editMode">editMode:</label>
                <Field name="editMode" component="input" type="checkbox"/>
            </div>
            <button type="submit">Add car</button>
        </form>

    </form>
}

CarAddForm = reduxForm({
    form: 'carForm'
})(CarAddForm)

export default connect(mapStateToProps, {deleteOrder,getOrders,editModeSuccsess, changeCar, updateCar,addNewCarForm})(Cars);


