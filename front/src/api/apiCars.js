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
	postCar () {
		return instance.post(`cars`)
	},
	updateCar () {
		return instance.put()
	},
	deleteCar () {
		return instance.delete()
	}
}