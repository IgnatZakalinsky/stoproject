import React from 'react';
import {Route} from "react-router-dom";
import Clients from "./clients/Clients";
import ClientProfile from "./clientProfile/ClientProfile";

function STO() {
    return (
        <div className="STO">
            <Route path='/clients' render={() => <Clients/>}/>
            <Route path='/clientprofile' render={() => <ClientProfile/>}/>
        </div>
    );
}

export default STO;
