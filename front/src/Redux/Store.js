import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import carsReducer from "../reducers/carsReducer";
import clientReducer from "../reducers/clientsRreducer";
import ordersReducer from "../reducers/ordersReducer";


let reducers = combineReducers({
    cars: carsReducer,
    clients: clientReducer,
    orders: ordersReducer

})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store