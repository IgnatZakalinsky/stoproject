import * as axios from "axios";
const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const carAPI = {
	getCar (clientId) {
		console.log(clientId)
		return instance.get(`cars?clientId=${clientId}`)
	},
	getCars () {
		return instance.get(`cars`)
	},
	addCar (newCar) {
		return instance.post(`cars`,newCar)
	},
	updateCar (id,newCar) {
		return instance.put(`cars/${id}`,newCar)
	},
	deleteCar (id) {
		return instance.delete(`cars/${id}`)
	}
}