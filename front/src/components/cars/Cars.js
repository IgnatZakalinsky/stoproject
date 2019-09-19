import React, {useEffect} from 'react';
import Order from "../orders/Order";
import Car from "./Car";
import {connect} from "react-redux";
import {deleteOrder, getOrders} from "../../Thunks/ordersThunks";
import {addNewCarForm} from "../../reducers/carsReducer";
import AddOrder from "../EditOrder/AddOrder";
import EditOrder from "../EditOrder/EditOrder";
import {addNewCar, deleteCar, updateCar} from "../../Thunks/carsThunks";
import {Field, reduxForm} from "redux-form";
import {editModeSuccsess} from "../../reducers/ordersReducer";
import {required} from "../validators/validators";
import {MyInput, MyInputText} from "../FormsControl/FormsControls";

function Cars(props) {
    // const order = props.orders.map(o => {
    //     if (o.editMode === true) return <EditOrder {...o} />
    //     return <Order editModeSuccsess={props.editModeSuccsess} deleteOrder={props.deleteOrder} {...o}/>
    // });

    const cars = props.cars.map(c => <Car orders={props.orders} getOrders={props.getOrders} key={c.id}
                                          {...c} deleteCar={props.deleteCar} deleteOrder={props.deleteOrder} updateCar={props.updateCar}
                                          editModeSuccsess={props.editModeSuccsess} isChangeCar={props.isChangeCar}/>)

    let addNewCar = (newCar) => {
        props.addNewCar(props.clientId, newCar)
        props.addNewCarForm(false)
    }

    return (
        <div>
            {props.showFormAddNewCar
                ? <CarAddForm onSubmit={addNewCar}/>
                : <button onClick={() => props.addNewCarForm(true)}>add new car </button>
            }
            {cars}
            {/*{order}*/}
            {/*<AddOrder carId={props.id} clientId={props.clientId}/>*/}
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
        <h3>All fields must be filled</h3>
        <div>
            <label htmlFor="make">make:</label>
            <Field name="make" component={MyInputText} validate={[required]} type="text"/>
        </div>
        <div>
            <label htmlFor="model">model:</label>
            <Field name="model" component={MyInputText} validate={[required]} type="text"/>
        </div>
        <div>
            <label htmlFor="year">year:</label>
            <Field name="year" component={MyInputText} validate={[required]} type="text"/>
        </div>
        <div>
            <label htmlFor="vin">vin:</label>
            <Field name="vin" component={MyInputText} validate={[required]} type="text"/>
        </div>
        <button type="submit">Add car</button>
    </form>
}

CarAddForm = reduxForm({
    form: 'addNewCarForm'
})(CarAddForm)


export default connect(mapStateToProps, {
    editModeSuccsess, getOrders,
    addNewCar, updateCar, addNewCarForm, deleteCar, deleteOrder
})(Cars);


