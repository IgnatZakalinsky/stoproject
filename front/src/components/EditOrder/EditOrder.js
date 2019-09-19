import React from 'react'
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import { updateOrder} from "../../Thunks/ordersThunks";
import  styles from './EditOrder.module.css'
import {required, required2} from "../validators/validators";
import {MyInput} from "../FormsControl/FormsControls";


let SaveOrders = (props) => {
    return (
        <form className={styles.formOrder} onSubmit={props.handleSubmit}>
            <div>
                <Field  component={MyInput} type='number' validate={[required]}
                       name='amount' min='0' max='10000' placeholder='amount'/>
            </div>
            <div>
                <Field  component='input'
                        name='date' type={'text'}/>
            </div>
            <div>
                <Field name='status'  component="select" value={"in-progress"}>
                    <option value="---">---</option>
                    <option value="in-progress">in-progress</option>
                    <option value="completed">completed</option>
                    <option value="cancelled">cancelled</option>
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

