import {ordersAPI} from "../api/apiOrders";
import {setOrdersSuccess} from "../reducers/ordersReducer";




export const getOrders = () => async (dispatch) =>{
	const orders = await ordersAPI.getOrders();
	dispatch(setOrderSuccess(orders));
}