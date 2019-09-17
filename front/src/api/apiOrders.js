import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const ordersAPI = {
	getOrders (carId) {
		return instance.get(`orders?carId=${carId}`)
	},
	addOrder (fakeOrder) {
		return instance.post(`orders`, fakeOrder)
	},
	updateOrder (newOrder, id) {
		return instance.put(`orders/${id}`,newOrder)//newOrder
	},
	deleteOrder (id) {
		return instance.delete(`orders/${id}`)
	}
}