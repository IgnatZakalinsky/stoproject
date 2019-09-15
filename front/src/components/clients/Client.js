import React from 'react';
import styles from './Client.module.css'
import {NavLink} from "react-router-dom";

function Client(props) {
    const data = Object.entries(props).map((d, i) => <div key={i}>
        <span>{d[0]}</span> : <span>{d[1]}</span>
    </div>)

    return (
        <div className="Client">
            <NavLink to={'/clientProfile/' + props.id}>
                {data}
                {/*}div><span>Name: </span><span>{props.firstName}</span></div>
            <span>Last Name: </span><div>{props.lastName}</div>
            <span>Year: </span><div>{props.dob}</div>
            <span>Address: </span><div>{props.address}</div>
            <span>Email: </span><div>{props.email}</div>
            <span>Phone: </span><div>{props.phone}</div>*/}
            </NavLink>
        </div>

    );
}

export default Client;
