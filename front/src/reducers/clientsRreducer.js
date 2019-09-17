const SET_CLIENTS = 'stoProject/clients/SET_CLIENTS'
const SET_REDIRECT = 'stoProject/clients/SET_REDIRECT'

const initialState = {
    clients: [{}],
    firstName_lastName: '',
    red: false,
    redid: 1
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
                red: true
            };
        default:
            return state
    }
}

export const setClientSuccess = (clients) => ({type: SET_CLIENTS, clients})


export default clientReducer