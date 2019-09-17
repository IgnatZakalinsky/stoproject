import React from 'react'
import {connect} from "react-redux";
import {addOrder} from "../../Thunks/ordersThunks";


let AddOrder = (props) => {

    let addOrder = ()=>{
        props.addOrder(props.carId,props.clientId)
    }
    return (
        <div>
            <button onClick={addOrder}>AddOrder</button>
        </div>
    )
}

export default connect(null,{addOrder})(AddOrder)