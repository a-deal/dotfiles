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
const request = path => {
	return Axios.get(`${BASE_URL}${path}`);
};

class GithubClient {
	findUserGists(username) {
		return request(`/users/${username}/gists`);
	}

	getGistByID(id) {
		return request(`/gists/${id}`);
	}
}

export default GithubClient;