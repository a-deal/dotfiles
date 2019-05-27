import Axios from 'axios';

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

class GithubClient {
	findGistsByUser(username) {
		return request('get', `/users/${username}/gists`)
			.then(console.log)
			.catch(console.log);
	}

	getGistByID(id) {
		return request('get', `/gists/${id}`);
	}
}

export default GithubClient;
