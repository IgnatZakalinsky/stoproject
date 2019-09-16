import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const ordersAPI = {
	getOrders (carId) {
		return instance.get(`orders?carId=${carId}`)
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