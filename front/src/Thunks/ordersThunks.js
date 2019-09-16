import {ordersAPI} from "../api/apiOrders";
import {setOrdersSuccess} from "../reducers/ordersReducer";




export const getOrders = (carId) => async (dispatch) =>{
	const res = await ordersAPI.getOrders(carId);
	dispatch(setOrdersSuccess(res.data));
}