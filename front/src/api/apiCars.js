import * as axios from "axios";
const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const carAPI = {
	getCar (clientId) {
		console.log(clientId)
		return instance.get(`cars?clientId=${clientId}`)
	},
	addCar (newCar) {
		return instance.post(`cars`,newCar)
	},
	updateCar (idCar,newCar) {
		return instance.put(`cars/${idCar}`,newCar)
	},
	deleteCar (idCar) {
		return instance.delete(`cars/${idCar}`)
	}
}