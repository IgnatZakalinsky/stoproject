import {clientsAPI} from "../api/apiClients";
import {setClientSuccess} from "../reducers/clientsRreducer";
import {getCar} from "./carsThunks";




export const getClients = (firstName,lastName) => async (dispatch, getState) =>{
    // const res = await clientsAPI.getClients(getState().clients.firstName, getState().clients.lastName );
    const res = await clientsAPI.getClients(firstName,lastName );
    debugger
    dispatch(setClientSuccess(res.data));
}
export const getClient = (id) => async (dispatch) =>{
    const res = await clientsAPI.getClient(id);
    dispatch(setClientSuccess(res.data));
    console.log(res)
    dispatch(getCar(res.data[0].id));

}
