import React from 'react';
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <div className="Home" style={{background: 'lime'}}>
            STO <NavLink to={'/clients'}><button>Clients</button></NavLink>

        </div>
    );
}

export default Home;
