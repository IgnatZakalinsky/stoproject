import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {applyMiddleware, combineReducers, createStore} from "redux";


let reducers = combineReducers({
    // profilePage: profileReducer,
    // dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer,

})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store