import React, {useState,useEffect} from 'react';
import {Field, reduxForm} from "redux-form";
import AddOrder from "../EditOrder/AddOrder";
import {required} from "../validators/validators";
import {MyInputText} from "../FormsControl/FormsControls";
import EditOrder from "../EditOrder/EditOrder";
import Order from "../orders/Order";


const Car = (props) => {

    const order = props.orders.filter(o => {
        return o.carId === props.id;
    }).map(o => {
        if (o.editMode === true) return <EditOrder {...o} />
        return <Order editModeSuccsess={props.editModeSuccsess} deleteOrder={props.deleteOrder} {...o}/>
    });

    useEffect(() => {
        props.getOrders(props.id)//вызываем thunkCreator, который возвращает thunk
    }, [props.id])

    const [isChangeCar, setChangeCar]=useState(false)

    const defaultValueForm = {
        id: props.id,
        clientId: props.clientId,
        make: props.make,
        model: props.model,
        year: props.year,
        vin: props.vin
    }

    let changeCar = (formData) => {
        setChangeCar(false)
        props.updateCar(formData.id, formData)
    }

    let deleteCar=()=>{
        props.deleteCar(props.id)
    }

    return (
        <div style={{border: '1px solid red'}}>
            {isChangeCar
                ? <CarForm onSubmit={changeCar} initialValues={defaultValueForm}/>
                : <div>
                    <div>Car</div>
                    <div><span>id: {props.id}</span></div>
                    <div><span>clientId: {props.clientId}</span></div>
                    <div><span>make: {props.make}</span></div>
                    <div><span>model: {props.model}</span></div>
                    <div><span>year: {props.year}</span></div>
                    <div><span>vin: {props.vin}</span></div>
                    <button onClick={() => setChangeCar(true)}>Edit</button>
                    <button onClick={deleteCar} disabled={props.orders.length !== 0}>Delete</button>
                    {order}
                    <AddOrder carId={props.id} clientId={props.clientId}/>

                </div>}
        </div>
    );
}

let CarForm = props => {
    const {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        {/*<div>*/}
        {/*    <label htmlFor="id">id:</label>*/}
        {/*    <Field name="id" component="input" type="text"/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <label htmlFor="clientId">clientId:</label>*/}
        {/*    <Field name="clientId" component="input" type="text"/>*/}
        {/*</div>*/}
        <div>
            <label htmlFor="make">make:</label>
            <Field name="make" component={MyInputText} validate={[required]} type="text" />
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
        <button type="submit">Submit</button>

    </form>
}

CarForm = reduxForm({
    form: 'carForm'
})(CarForm)


export default Car;