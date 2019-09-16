import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Cars from "../cars/Cars";
import Client from "../clients/Client";
import {getClient} from "../../Thunks/clientsThunks";
import {getCar} from "../../Thunks/carsThunks";

function ClientProfile(props) {
//useE getCar(props.clientId

	useEffect(() => {
		props.getClient(props.id)
	}, [props.id]);

	const cars = props.cars.map(c => <Cars cars={props.cars} {...c}/>);

	return (
		<div>
			<Client {...props.clients[0]} />
			{cars}
		</div>
	);
}

let mapStateToProps = (state) => {
	return {
		clients: state.clients.clients,
		cars: state.cars.cars
	};
};

export default connect(mapStateToProps, {getClient,getCar})(ClientProfile);
