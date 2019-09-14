import React from 'react';
import styles from './Client.module.css'

function Client(props) {
    return (
        <div className="Client">

            <span>Name: </span><div>{props.firstName}</div>
            <span>Last Name: </span><div>{props.lastName}</div>
            <span>Year: </span><div>{props.dob}</div>
            <span>Address: </span><div>{props.address}</div>
            <span>Email: </span><div>{props.email}</div>
            <span>Phone: </span><div>{props.phone}</div>
        </div>

    );
}

export default Client;
