import {carAPI} from "../api/apiCars";
import {setCarsSuccess, updateCarSuccess} from "../reducers/carsReducer";




// export const getCars = () => async (dispatch, getState) =>{
// 	const res = await carsAPI.getCars(getState().clients.firstName_lastName);
// 	dispatch(setCarsSuccess(res.data));
// }

export const getCar = (id) => async (dispatch) =>{
	const res = await carAPI.getCar(id);
	dispatch(setCarsSuccess(res.data));
}

export const updateCar = (id, newCar) => async (dispatch) =>{
	const res = await carAPI.updateCar(id, newCar);
	dispatch(updateCarSuccess(newCar));
}