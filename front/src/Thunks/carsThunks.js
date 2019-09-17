import {carAPI} from "../api/apiCars";
import {addCarSuccess, deleteCarSuccess, setCarsSuccess, updateCarSuccess} from "../reducers/carsReducer";


export const getCar = (id) => async (dispatch) =>{
	const res = await carAPI.getCar(id);
	dispatch(setCarsSuccess(res.data));
}

export const updateCar = (id, newCar) => async (dispatch) =>{
	const res = await carAPI.updateCar(id, newCar);
	dispatch(updateCarSuccess(newCar));
}

export const deleteCar = (id) => async (dispatch) =>{
	await carAPI.deleteCar(id);
	dispatch(deleteCarSuccess(id));
}

export const addNewCar = (clientId, car) => async (dispatch) =>{
	let {make='new car',model='new model',year=2019,vin=77777}=car
	let newCar={clientId, make, model, year, vin}

	let resp= await carAPI.addCar(newCar);
	dispatch(addCarSuccess(resp.data));
}