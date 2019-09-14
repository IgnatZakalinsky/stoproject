import React from 'react';
import {Route} from "react-router-dom";

function STO() {
    return (
        <div className="STO">
            <Route path='/x' render={() => <div>x</div>}/>
        </div>
    );
}

export default STO;
