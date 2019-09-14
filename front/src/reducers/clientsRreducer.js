
const GET_CLIENTS = 'stoProject/clients/GET_CLIENTS'

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
        case GET_CLIENTS:
            return {

            }
        default:
            return state
    }
}


export default clientReducer