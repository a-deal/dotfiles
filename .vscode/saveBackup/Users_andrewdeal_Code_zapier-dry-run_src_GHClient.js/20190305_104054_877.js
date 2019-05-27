import Axios from 'axios';

const BASE_URL = 'https://api.github.com';
const GISTS_BY_USER_PATH = '/users/:username/gists';
const GIST_PATH = '/gists/:gist_id';
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
	findUserGists(username) {
		return request('get', `/users/${username}/gists`)
			.then(data => ({ data, err: false }))
			.catch(err => ({ err: true, errMsg: err }));
	}

	getGistByID(id) {
		return request('get', `/gists/${id}`);
	}
}

export default GithubClient;
