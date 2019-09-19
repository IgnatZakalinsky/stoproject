import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const clientsAPI = {
	getClient (id) {
		return instance.get(`clients?id=${id}`)
	},
	getClients (firstName, lastName) {
		return instance.get(`clients?firstName_like=${firstName}&lastName_like=${lastName}`)
	},
	postClient () {
		return instance.post(`clients `, {"firstName": "Ivan",
			"lastName": "Ivanov",
			"dob": "2000-01-26",
			"address": "Minsk",
			"email": "ivanov@ivan.com",
			"phone": "+37533435534"})
	},
	updateClient (newClient,id) {
		return instance.put(`clients/${id}`,newClient)
	},
	deleteClient () {
		return instance.delete(`clients `)
	}
}