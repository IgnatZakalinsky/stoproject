import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const clientsAPI = {
	getClient (id) {
		return instance.get(`clients?id=${id}`)
	},
	getClients (firstName_lastName) {
		return instance.get(`clients?firstName_like=${firstName_lastName}`)
	},
	postClient () {
		return instance.post(`clients `)
	},
	updateClient () {
		return instance.put(`clients `)
	},
	deleteClient () {
		return instance.delete(`clients `)
	}
}