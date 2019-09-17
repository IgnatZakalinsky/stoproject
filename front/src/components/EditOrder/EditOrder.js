import React from 'react'
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import { updateOrder} from "../../Thunks/ordersThunks";
import  styles from './EditOrder.module.css'


let SaveOrders = (props) => {
    return (
        <form className={styles.formOrder} onSubmit={props.handleSubmit}>
            <div>
                <Field component='input'
                       name='amount' placeholder='amount'/>
            </div>
            <div>
                <Field name='status' component="select">
                    <option value="completed">Completed</option>
                    <option value="in-progress">In Progress</option>
                    <option value="cancelled">Cancelled</option>
                </Field>
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

          props.updateOrder(formData,props.carId,props.clientId, props.id,)
    }
    return (
        <div>
            <CreateReduxForm selectOrderSuccess={props.selectOrderSuccess} onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null,{updateOrder})(EditOrder)

