import {clientsAPI} from "../api/apiClients";




export const getClients = () =>(dispatch) =>{
    clientsAPI.getClients()

}
