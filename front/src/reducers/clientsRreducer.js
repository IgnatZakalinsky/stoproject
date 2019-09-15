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
    ],
    firstName_lastName: 'n'
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENTS:
            return {
                ...state, clients: action.clients
            }
        default:
            return state
    }
}

export const setClientSuccess = (clients) => ({type: SET_CLIENTS, clients})


export default clientReducer