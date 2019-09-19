import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Cars from "../cars/Cars";
import Client from "../clients/Client";
import {getClient} from "../../Thunks/clientsThunks";
import {getCar} from "../../Thunks/carsThunks";
import EditClients from "../clients/EditClient";

function ClientProfile(props) {
//useE getCar(props.clientId

	useEffect(() => {
		props.getClient(props.id)
	}, [props.id]);

	return (
		<div>
			{props.editMode
				? <EditClients  {...props.clients[0]}/>
			: <Client {...props.clients[0]} /> }

			<Cars cars={props.cars} clientId={props.id}/>
		</div>
	);
}

let mapStateToProps = (state) => {
	return {
		clients: state.clients.clients,
		cars: state.cars.cars,
		editMode: state.clients.editMode
	};
};

export default connect(mapStateToProps, {getClient,getCar})(ClientProfile);
