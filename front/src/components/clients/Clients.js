import React from 'react';
import Client from "./Client";
import {connect} from "react-redux";

function Clients(props) {
    const clients = props.clients.map(c => <Client {...c}/>);

    return (
        <div className="Clients">
            {clients}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        clients: state.client.clients
    };
};

export default connect(mapStateToProps)(Clients);
