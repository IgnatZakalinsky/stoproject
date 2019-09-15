import React from 'react';
import Order from "../orders/Order";

function Cars(props) {
    //useE getOr(props.carId)

    const order = props.orders.map(c => <Order {...c}/>);

    return (
        <div >
            {props.make}
            {order}
        </div>
    );
}

export default Cars;
