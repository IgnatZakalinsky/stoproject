import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const carAPI = {
	getCar () {
		return instance.get(`cars?id=${id}`)
	},
	getCars () {
		return instance.get(`cars`)
	},
	postCar () {
		return instance.post(`cars`, {cars})
	},
	updateCar () {
		return instance.put()
	},
	deleteCar () {
		return instance.delete()
	}
}