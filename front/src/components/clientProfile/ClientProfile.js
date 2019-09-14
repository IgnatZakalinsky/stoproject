import React from 'react';
import {connect} from "react-redux";
import Cars from "../cars/cars";
import Client from "../clients/Client";

function ClientProfile(props) {
    const cars = props.cars.map(c => <Cars {...c}/>);

    return (
        <div >
            <Client {...props.clients[0]} />
            {cars}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        clients: state.client.clients,
        cars: state.cars.cars
    };
};

export default connect(mapStateToProps)(ClientProfile);
