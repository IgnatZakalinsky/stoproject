import React, {useEffect } from 'react';
import Client from "./Client";
import {connect} from "react-redux";
import FindClientForm from "../forms/FindClientForm";
import {getClients} from "../../Thunks/clientsThunks";
import EditOrder from "../EditOrder/EditOrder";
import EditOrderContainer from "../EditOrder/EditOrderContainer";

function Clients(props) {
    const clients = props.clients.map(c => <Client {...c}/>);

    useEffect(() => {
        props.getClients()
    }, []);

    return (
        <>
            <FindClientForm/>
            <div className="Clients">
                {clients}
            </div>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        clients: state.clients.clients
    };
};

export default connect(mapStateToProps, {getClients})(Clients);
