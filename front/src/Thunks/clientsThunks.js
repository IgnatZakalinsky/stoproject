import {clientsAPI} from "../api/apiClients";




export const getClients = () => async (dispatch) =>{
    const clients = await clientsAPI.getClients();
    dispatch(setClientSuccess(clients));
}
