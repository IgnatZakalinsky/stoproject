import {carAPI} from "../api/apiCars";
import {setCarsSuccess} from "../reducers/carsReducer";




// export const getCars = () => async (dispatch, getState) =>{
// 	const res = await carsAPI.getCars(getState().clients.firstName_lastName);
// 	dispatch(setCarsSuccess(res.data));
// }

export const getCar = (id) => async (dispatch) =>{
	const res = await carAPI.getCar(id);
	dispatch(setCarsSuccess(res.data));
}