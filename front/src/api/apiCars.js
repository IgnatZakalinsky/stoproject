import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const resourcesAPI = {
	getCars () {
		return instance.get(``)
	},
	postCars () {
		return instance.post(``)
	},
}