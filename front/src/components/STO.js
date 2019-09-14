import React from 'react';
import {Route} from "react-router-dom";
import Clients from "./clients/Clients";

function STO() {
    return (
        <div className="STO">
            <Route path='/clients' render={() => <Clients/>}/>
        </div>
    );
}

export default STO;
