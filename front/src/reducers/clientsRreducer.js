const SET_CLIENTS = 'stoProject/clients/SET_CLIENTS'
const SET_REDIRECT = 'stoProject/clients/SET_REDIRECT'
const RESET_REDIRECT = 'stoProject/clients/RESET_REDIRECT'
const RESET_EDITMODE = 'stoProject/clients/RESET_EDITMODE'


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
                clients: action.clients
            };
        case SET_REDIRECT:
            return {
                ...state,
                redid: action.id,
                red: true,
                editMode: true
            };
        case RESET_REDIRECT:
            return {
                ...state,
                red: false
            };
        case RESET_EDITMODE:
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
export const resetRedirect = () => ({type: RESET_REDIRECT })
export const resetEditmode = () => ({type: RESET_EDITMODE })


export default clientReducer