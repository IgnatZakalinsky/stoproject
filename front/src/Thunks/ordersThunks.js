import {ordersAPI} from "../api/apiOrders";
import {addOrderSuccess, editOrderSuccess, setOrdersSuccess} from "../reducers/ordersReducer";


export const getOrders = (carId) => async (dispatch) => {
    const res = await ordersAPI.getOrders(carId);
    dispatch(setOrdersSuccess(res.data));
}


export const addOrder = (carId, clientId) => async (dispatch) => {
    const res = await ordersAPI.addOrder({//отправляем на сервер
        "carId": carId,
        "clientId": clientId,
        "amount": 20,
        "status": "in-progress",
        "editMode": true
    });

    dispatch(addOrderSuccess(res.data));//cюда записываем ActionCreator(в скобочкач..
    // пишем то что придет с сервера
}

export const updateOrder = (formdata, carId = 1, clientId = 1, id) => async (dispatch) => {
    const res = await ordersAPI.updateOrder({//отправляем на сервер
            id: id,
            "carId": carId,
            "clientId": clientId,
            "amount": formdata.amount,
            "status": formdata.status,
            "editMode": false
        },
        id);


    dispatch(editOrderSuccess(res.data));//cюда записываем ActionCreator(в скобочкач..
    // пишем то что придет с сервера
}




// export const selectOrder = (newstatus) => async (dispatch) => {
//     const res = await ordersAPI.selectOrder({//отправляем на сервер
//
//             "status": status.newstatus,
//
//         },
//         id);
//
//
//     dispatch(selectOrderSuccess(res.data));//cюда записываем ActionCreator(в скобочкач..
//     // пишем то что придет с сервера
// }


