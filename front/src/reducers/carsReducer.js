const SET_CARS = 'stoProject/cars/SET_CARS'
const CHANGE_CAR = 'stoProject/cars/CHANGE_CAR'

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
    ],
    isChangeCar: false
}

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARS:
            return {
                ...state,
                cars: action.cars
            };
        case CHANGE_CAR:
            return {
                ...state,
                isChangeCar: action.status
            };
        default:
            return state
    }
}

export const setCarsSuccess = (cars) => ({type: SET_CARS, cars})
export const changeCar = (status) => ({type: CHANGE_CAR, status})

export default carsReducer