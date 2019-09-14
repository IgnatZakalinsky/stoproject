import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const ordersAPI = {
	getOrder () {
		return instance.get(`orders?id=${id}`)
	},
	getOrders () {
		return instance.get(`orders`)
	},
	postOrder () {
		return instance.post(`orders`)
	},
	updateOrder () {
		return instance.put(`orders`)
	},
	deleteOrder () {
		return instance.delete(`orders`)
	}
}