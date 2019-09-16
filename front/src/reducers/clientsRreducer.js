const SET_CLIENTS = 'stoProject/clients/SET_CLIENTS'

const initialState = {
    clients: [],
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENTS:
            return {
                ...state,
                clients: action.clients
            };
        default:
            return state
    }
}

export const setClientSuccess = (clients) => ({type: SET_CLIENTS, clients})


export default clientReducer