import {ordersAPI} from "../api/apiOrders";
import {addOrderSuccess, setOrdersSuccess} from "../reducers/ordersReducer";




export const getOrders = (carId) => async (dispatch) =>{
	const res = await ordersAPI.getOrders(carId);
	dispatch(setOrdersSuccess(res.data));
}


export const addOrder = (carId,clientId) => async (dispatch) =>{
	const res = await ordersAPI.addOrder({//отправляем на сервер
		"carId": carId,
		"clientId": clientId,
		"amount": 20,
		"status": "in-progress",
		"editMode": false
	});
	console.log(res)
	dispatch(addOrderSuccess(res.data));//cюда записываем ActionCreator(в скобочкач..
	// пишем то что придет с сервера
}

