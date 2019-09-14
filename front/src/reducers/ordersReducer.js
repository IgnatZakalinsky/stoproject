
const GET_ORDERS = 'stoProject/orders/GET_ORDERS'

const initialState = {
   orders: [
       {
           "id": 1,
           "carId": 2,
           "clientId": 1,
           "amount": 20,
           "status": "in-progress"
       },
       {
           "id": 2,
           "carId": 2,
           "clientId": 1,
           "amount": 20,
           "status": "cancelled"
       },
       {
           "id": 3,
           "carId": 1,
           "clientId": 1,
           "amount": 20,
           "status": "completed"
       }
   ]
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {

            }
        default:
            return state
    }
}


export default ordersReducer