import {clientsAPI} from "../api/apiClients";
import {setClientSuccess} from "../reducers/clientsRreducer";




export const getClients = () => async (dispatch) =>{
    const clients = await clientsAPI.getClients();
    dispatch(setClientSuccess(clients));
}
