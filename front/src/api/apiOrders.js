import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const ordersAPI = {
	getOrders () {
		return instance.get(``)
	},
	postOrders () {
		return instance.post(``)
	}
}