const SET_CARS = 'stoProject/cars/SET_CARS'
const CHANGE_CAR = 'stoProject/cars/CHANGE_CAR'
const ADD_NEW_FORM_CAR = 'stoProject/cars/ADD_NEW_FORM_CAR'
const UPDATE_CAR = 'stoProject/cars/UPDATE_CAR'
const ADD_NEW_CAR = 'stoProject/cars/ADD_NEW_CAR'

const initialState = {
    cars: [
    ],
    isChangeCar: false,
    showFormAddNewCar: false
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
        case ADD_NEW_FORM_CAR:
            return {
                ...state,
                showFormAddNewCar: action.status
            };
        case UPDATE_CAR:
            return {
                ...state,
                cars: state.cars.map(c => {
                    if (c.id === action.newCar.id) return action.newCar
                    return c
                })
            };
        case ADD_NEW_CAR:debugger
            return {
                ...state,
                cars: [...state.cars, action.newCar]
            };
        default:
            return state
    }
}

export const setCarsSuccess = (cars) => ({type: SET_CARS, cars})
export const changeCar = (status) => ({type: CHANGE_CAR, status})
export const addNewCarForm = (status) => ({type: ADD_NEW_FORM_CAR, status})
export const updateCarSuccess = (newCar) => ({type: UPDATE_CAR, newCar})
export const addCarSuccess = (newCar) => ({type: ADD_NEW_CAR, newCar})

export default carsReducer