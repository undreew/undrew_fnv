import axios from 'axios';

export async function fetcher(method = '', url, data, options) {
	let config = {
		url,
		method,
		...options,
	};

	if (method.toUpperCase() === 'GET') {
		config.params = data;
	} else {
		config.data = data;
	}

	return await axios(config).then((res) => res.data);
}
