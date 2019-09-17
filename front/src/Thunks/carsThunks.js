import {carAPI} from "../api/apiCars";
import {addCarSuccess, setCarsSuccess, updateCarSuccess} from "../reducers/carsReducer";




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

export const addNewCar = (clientId, car) => async (dispatch) =>{
	let {make='new',model='new',year=2019,vin=77777,editMode=true}=car

	let newCar={
		clientId: clientId,
		make: make,
		model: model,
		year: year,
		vin: vin,
		editMode: editMode
	}

	const res = await carAPI.addCar(newCar);
	dispatch(addCarSuccess(newCar));
}