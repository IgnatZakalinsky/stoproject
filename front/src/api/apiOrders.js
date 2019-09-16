import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const ordersAPI = {
	getOrders (carId) {
		return instance.get(`orders?carId=${carId}`)
	},
	addOrder (fakeOrder) {
		debugger;
		return instance.post(`orders`, fakeOrder)
	},
	updateOrder () {
		return instance.put(`orders`)
	},
	deleteOrder () {
		return instance.delete(`orders`)
	}
}