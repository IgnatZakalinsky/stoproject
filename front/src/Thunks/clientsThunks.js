import {clientsAPI} from "../api/apiClients";
import {setClientSuccess} from "../reducers/clientsRreducer";
import {getCar} from "./carsThunks";




export const getClients = (firstName,lastName) => async (dispatch) =>{
    const res = await clientsAPI.getClients(firstName,lastName );
    debugger
    dispatch(setClientSuccess(res.data));
}
export const getClient = (id) => async (dispatch) =>{
    const res = await clientsAPI.getClient(id);
    dispatch(setClientSuccess(res.data));
    dispatch(getCar(res.data[0].id));

}
