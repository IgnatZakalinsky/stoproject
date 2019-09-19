import React from 'react'
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {updateClient} from "../../Thunks/clientsThunks";

let SaveClients = props => {
	const {handleSubmit} = props
	return <form onSubmit={handleSubmit}>
		<div>
			<label htmlFor="firstName">firstName:</label>
			<Field name="firstName" component="input" type="text"/>
		</div>
		<div>
			<label htmlFor="lastName">lastName:</label>
			<Field name="lastName" component="input" type="text"/>
		</div>
		<div>
			<label htmlFor="dob">dob:</label>
			<Field name="dob" component="input" type="text"/>
		</div>
		<div>
			<label htmlFor="address">address:</label>
			<Field name="address" component="input" type="text"/>
		</div>
		<div>
			<label htmlFor="email">email:</label>
			<Field name="email" component="input" type="text"/>
		</div>
		<div>
			<label htmlFor="phone">phone:</label>
			<Field name="phone" component="input" type="text"/>
		</div>
		<button type="submit">Submit</button>

	</form>
}

const CreateReduxForm = reduxForm({form: 'save'})(SaveClients)


let EditClient = (props) => {

	let onSubmit = (formData) => {

		props.updateClient(formData, props.id,)
	}
	return (
		<div>
			<CreateReduxForm  onSubmit={onSubmit}/>
		</div>
	)
}

export default connect(null,{updateClient})(EditClient)

