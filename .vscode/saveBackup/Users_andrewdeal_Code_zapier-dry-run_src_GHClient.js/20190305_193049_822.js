import Axios from 'axios';
import { userInfo } from 'os';

const BASE_URL = 'https://api.github.com';
const HEADERS = {
	Accept: 'application/vnd.github.v3+json'
};

/*
Additional considerations:

- Check if username exists
*/
const request = (method, path) => {
	return Axios({
		...HEADERS,
		method,
		url: `${BASE_URL}${path}`
	});
};

const client = {
	findGistsByUser(username) {
		return request('get', `/users/${username}/gists`).then(res => res.data);
	},
	getGistByID(id) {
		return request('get', `/gists/${id}`);
	}
};

export default client;
