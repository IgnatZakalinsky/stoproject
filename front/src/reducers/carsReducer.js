const SET_CARS = 'stoProject/cars/SET_CARS'
const SHOW_FORM_ADD_CAR = 'stoProject/cars/SHOW_FORM_ADD_CAR'
const UPDATE_CAR = 'stoProject/cars/UPDATE_CAR'
const ADD_NEW_CAR = 'stoProject/cars/ADD_NEW_CAR'
const DELETE_CAR = 'stoProject/cars/DELETE_CAR'

const initialState = {
    cars: [],
    showFormAddNewCar: false
}

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARS:
            return {
                ...state,
                cars: action.cars
            };
        case SHOW_FORM_ADD_CAR:
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
        case ADD_NEW_CAR:
            return {
                ...state,
                cars: [...state.cars, action.newCar]
            };
        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter(c => c.id !== action.id)
            };
        default:
            return state
    }
}

export const setCarsSuccess = (cars) => ({type: SET_CARS, cars})
export const addNewCarForm = (status) => ({type: SHOW_FORM_ADD_CAR, status})
export const updateCarSuccess = (newCar) => ({type: UPDATE_CAR, newCar})
export const addCarSuccess = (newCar) => ({type: ADD_NEW_CAR, newCar})
export const deleteCarSuccess = (id) => ({type: DELETE_CAR, id})

export default carsReducer