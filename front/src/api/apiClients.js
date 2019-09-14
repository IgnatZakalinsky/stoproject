import * as axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:3005/'
});

export const clientsAPI = {
	getClients() {
		return instance.get(``)
			.then(response => response.data)
	},
	postClients() {
		return instance.post(``)
			.then(response => response.data)
	}
}