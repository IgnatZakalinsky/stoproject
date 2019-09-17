import React, {useEffect} from 'react';
import Order from "../orders/Order";
import Car from "./Car";
import {connect} from "react-redux";
import {deleteOrder, getOrders} from "../../Thunks/ordersThunks";
import {addNewCarForm, changeCar} from "../../reducers/carsReducer";
import AddOrder from "../EditOrder/AddOrder";
import EditOrder from "../EditOrder/EditOrder";
import {addNewCar, deleteCar, updateCar} from "../../Thunks/carsThunks";
import {Field, reduxForm} from "redux-form";
import {editModeSuccsess} from "../../reducers/ordersReducer";

function Cars(props) {

    // const order = props.orders.map(o => {
    //     if (o.editMode === true) return <EditOrder {...o} />
    //     return <Order {...o}/>
    // });

    const cars=props.cars.map(c => <Car key={c.id} {...c} deleteCar={props.deleteCar} updateCar={props.updateCar} isChangeCar={props.isChangeCar} changeCar={props.changeCar}/>)

    const order = props.orders.map((o,i) => {
    	 if(o.editMode === true) return <EditOrder {...o} key={i} selectOrderSuccess={props.selectOrderSuccess} />
    	return<Order key={i} deleteOrder={props.deleteOrder} editModeSuccsess={props.editModeSuccsess} {...o}/>});

    useEffect(() => {
        props.getOrders(props.id)
    }, [props.id])

    let addNewCar = (newCar) => {
        props.addNewCar(props.clientId,newCar)
        props.addNewCarForm(false)
    }

    return (
        <div>
            {props.showFormAddNewCar
                ? <CarAddForm onSubmit={addNewCar}/>
                : <button onClick={()=>props.addNewCarForm(true)}>add new car </button>
            }

            {cars}
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
            <h3>All fields must be filled</h3>
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


}

CarAddForm = reduxForm({
    form: 'addNewCarForm'
})(CarAddForm)

export default connect(mapStateToProps, {deleteOrder,getOrders,editModeSuccsess, changeCar, updateCar,addNewCarForm})(Cars);
export default connect(mapStateToProps, {getOrders, addNewCar, changeCar, updateCar,addNewCarForm, deleteCar})(Cars);


