import React, {useEffect } from 'react';
import Client from "./Client";
import {connect} from "react-redux";
import FindClientForm from "../forms/FindClientForm";
import {getClients} from "../../Thunks/clientsThunks";

function Clients(props) {
    const clients = props.clients.map(c => <Client {...c}/>);

    useEffect(() => {
        props.getClients()
    }, []);

    let findClient = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <FindClientForm findClient={findClient}/>
            <div className="Clients">
                {clients}
            </div>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        clients: state.client.clients
    };
};

export default connect(mapStateToProps, {getClients})(Clients);
