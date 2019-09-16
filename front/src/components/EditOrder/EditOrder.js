import React from 'react'
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import { updateOrder} from "../../Thunks/ordersThunks";


let SaveOrders = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='input'
                       name='amount' placeholder='amount'/>
            </div>
            <div>
                <Field component='input'
                       name='status' placeholder='status'/>
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>

    )
}

const CreateReduxForm = reduxForm({form: 'save'})(SaveOrders)


let EditOrder = (props) => {
    let onSubmit = (formData) => {

          props.updateOrder(formData,props.carId,props.clientId, props.id)
    }
    return (
        <div>
            <CreateReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null,{updateOrder})(EditOrder)

