const SET_ORDERS = 'stoProject/orders/SET_ORDERS'

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
        case SET_ORDERS:
            return {
                ...state, orders:[...state.orders, action.order]
            }
        default:
            return state
    }
}

export const setCarsSuccess = (order) => ({type: SET_ORDERS, order})


export default ordersReducer