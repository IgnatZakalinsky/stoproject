import {clientsAPI} from "../api/apiClients";
import {resetEditmode, resetRedirect, setClientSuccess, setRedirect} from "../reducers/clientsRreducer";
import {getCar} from "./carsThunks";
import {carAPI} from "../api/apiCars";




export const getClients = (firstName,lastName) => async (dispatch) =>{
    const res = await clientsAPI.getClients(firstName,lastName );
    dispatch(setClientSuccess(res.data));
}
export const getClient = (id) => async (dispatch) =>{
    const res = await clientsAPI.getClient(id);
    dispatch(setClientSuccess(res.data));
    dispatch(getCar(res.data[0].id));
    dispatch(resetRedirect());
}
export const createNewClient = () => async (dispatch) =>{
    const res = await clientsAPI.postClient();
    dispatch(setRedirect(res.data.id));
}

export const updateClient = (formdata, id) => async (dispatch) => {
	const res = await clientsAPI.updateClient({//отправляем на сервер
			id: id,
			"firstName": formdata.firstName,
			"lastName": formdata.lastName,
			"dob": formdata.dob,
			"address": formdata.address,
			"email": formdata.email,
			"phone": formdata.phone
		},
		id);


	dispatch(resetEditmode());            //cюда записываем ActionCreator(в скобочкач..
	// пишем то что придет с сервера

}