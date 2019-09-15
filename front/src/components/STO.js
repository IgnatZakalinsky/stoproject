import React from 'react';
import {Route} from "react-router-dom";
import Clients from "./clients/Clients";
import ClientProfile from "./clientProfile/ClientProfile";
import Home from "./Home";

function STO() {
    return (
        <div className="STO">
            <Home/>
            
            <Route path='/clients' render={() => <Clients/>}/>
            <Route path='/clientProfile/:id' render={(props) => <ClientProfile id={props.match.params.id}/>}/>
        </div>
    );
}

export default STO;
