const SET_CARS = 'stoProject/cars/SET_CARS'

const initialState = {
    cars: [
        {
            "id": 1,
            "clientId": 2,
            "make": "reno",
            "model": "stepway",
            "year": 2001,
            "vin": "HHDYS2323"
        },
        {
            "id": 2,
            "clientId": 1,
            "make": "tesla",
            "model": "rodster 2",
            "year": 2019,
            "vin": "WWDYS2323"
        }
    ]
}

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARS:
            return {
                ...state, cars:[...state.cars, action.car]
            }
        default:
            return state
    }
}

export const setCarsSuccess = (car) => ({type: SET_CARS, car})

export default carsReducer