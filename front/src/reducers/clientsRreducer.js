const SET_CLIENTS = 'stoProject/clients/SET_CLIENTS'

const initialState = {
    clients: [
        {
            "id": 1,
            "firstName": "Ivan",
            "lastName": "Ivanov",
            "dob": "2000-01-26",
            "address": "Minsk",
            "email": "ivanov@ivan.com",
            "phone": "+37533435534"
        },
        {
            "id": 2,
            "firstName": "Sidorov",
            "lastName": "Ivanov",
            "dob": "2000-01-26",
            "address": "Minsk",
            "email": "ivanov@ivan.com",
            "phone": "+37533435534"
        }
    ]
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENTS:
            return {
                ...state, clients:[...state.clients, action.client]
            }
        default:
            return state
    }
}

export const setClientSuccess = (client) => ({type: SET_CLIENTS, client})


export default clientReducer