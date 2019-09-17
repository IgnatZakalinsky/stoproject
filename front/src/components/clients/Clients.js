import React, {useEffect } from 'react';
import Client from "./Client";
import {connect} from "react-redux";
import FindClientForm from "../forms/FindClientForm";
import {createNewClient, getClients} from "../../Thunks/clientsThunks";
import CreatNewClient from "../forms/CreatNewClient";
import {Redirect} from "react-router-dom";

function Clients(props) {
    useEffect(()=>{
        props.getClients('', '')
    },[])

    const clients = props.clients.map(c => <Client {...c}/>);

    console.log("dksjhgkjdsgk" +" " + props.red)
   if (props.red === true) return <Redirect to={`clientProfile/${props.redid}`} />;
    return (
        <>
            <FindClientForm getClients={props.getClients}/>
            <div className="Clients">
                {clients}
            </div>
            <CreatNewClient createNewClient={props.createNewClient}/>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        clients: state.clients.clients,
        redid: state.clients.redid,
        red: state.clients.red
    };
};

export default connect(mapStateToProps, {getClients,createNewClient})(Clients);
