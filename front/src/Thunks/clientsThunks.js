import {clientsAPI} from "../api/apiClients";
import {setClientSuccess} from "../reducers/clientsRreducer";




export const getClients = () => async (dispatch, getState) =>{
    const res = await clientsAPI.getClients(getState().client.firstName_lastName);
    dispatch(setClientSuccess(res.data));
}
export const getClient = (id) => async (dispatch) =>{
    const res = await clientsAPI.getClient(id);
    dispatch(setClientSuccess(res.data));
}
