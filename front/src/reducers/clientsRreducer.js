const SET_CLIENTS = 'stoProject/clients/SET_CLIENTS'
const SET_REDIRECT = 'stoProject/clients/SET_REDIRECT'
const EDIT_CLIENT = 'stoProject/clients/EDIT_CLIENT'
const EDIT_MODE_CLIENT = 'stoProject/clients/EDIT_MODE_CLIENT'
const EDIT_MODE_CLIENT2 = 'stoProject/clients/EDIT_MODE_CLIENT2'

const initialState = {
    clients: [{}],
    firstName_lastName: '',
    red: false,
    redid: 1,
    editMode: false
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENTS:
            return {
                ...state,
                clients: action.clients,
                red: false
            };
        case SET_REDIRECT:
            return {
                ...state,
                redid: action.id,
                red: true,
                editMode: true
            };
        case EDIT_CLIENT:
            return {
                ...state,
                clients: [action.client],
                editMode: false


            };

        case EDIT_MODE_CLIENT:
            return {
                ...state,
                editMode: true
            };
        case EDIT_MODE_CLIENT2:
            return {
                ...state,
                editMode: false
            };
        default:
            return state
    }
}

export const setClientSuccess = (clients) => ({type: SET_CLIENTS, clients})
export const setRedirect = (id) => ({type: SET_REDIRECT, id})
export const editClientSuccess = (client) => ({type: EDIT_CLIENT, client})
export const editModeSuccess = () => ({type: EDIT_MODE_CLIENT})
export const editModeSuccess2 = () => ({type: EDIT_MODE_CLIENT2})

export default clientReducer