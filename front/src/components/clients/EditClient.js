import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {required} from "../validators/validators";
import {MyInputText} from "../FormsControl/FormsControls";
import {updateClient} from "../../Thunks/clientsThunks";


let SaveClient = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={MyInputText} name='firstName' placeholder={'First Name'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={MyInputText} name='lastName' placeholder={'Last Name'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={MyInputText} name='dob' placeholder={'Date of Birth'} type='text' />
            </div>
            <div>
                <Field component={MyInputText} name='address' placeholder={'Address'} validate={[required]}/>
            </div>

            <div>
                <Field component={MyInputText} name='email' placeholder={'Email'} validate={[required]}/>
            </div>

            <div>
                <Field component={MyInputText} name='phone' placeholder={'Phone'} validate={[required]}/>
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}

const CreateReduxForm = reduxForm({form: 'editclient'})(SaveClient)

let EditClients = (props) => {

    let onSubmit = (formData)=>{
         props.updateClient(formData,props.id);

    }
    return (
        <div>
            <h1>Create card</h1>
            <CreateReduxForm  onSubmit={onSubmit}/>
        </div>
    )
}



export default connect(null,{updateClient})(EditClients)

