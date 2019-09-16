import React from 'react';
import {Field, reduxForm} from "redux-form";




const Car = (props) => {

    let changeCar = (formData) => {
        props.changeCar(false)

    }

    return (
        <>
            {props.isChangeCar
                ? <CarForm onSubmit={changeCar} initialValues={props.car}/>
                : <div>
                    <div>Car</div>
                    <div><span>id: {props.id}</span></div>
                    <div><span>clientId: {props.clientId}</span></div>
                    <div><span>make: {props.make}</span></div>
                    <div><span>model: {props.model}</span></div>
                    <div><span>year: {props.year}</span></div>
                    <div><span>vin: {props.vin}</span></div>
                    <button onClick={()=>props.changeCar(true)}>Edit</button>
                </div>}
        </>
    );
}

let CarForm = props => {
    const {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">id:</label>
                <Field name="id" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="clientId">clientId:</label>
                <Field name="clientId" component="input" type="text"/>
            </div>
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
                <Field name="year" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="vin">vin:</label>
                <Field name="vin" component="input" type="text"/>
            </div>
            <button type="submit">Submit</button>
        </form>

    </form>
}

CarForm = reduxForm({
    form: 'carForm'
})(CarForm)


export default Car;