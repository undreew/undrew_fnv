import axios from 'axios';
import {API_URL} from 'constants/configs';
import Cookies from './cookies';
import {isEmpty} from 'lodash';

axios.defaults.baseURL = API_URL;
axios.defaults.timeout = 50 * 1000;
axios.defaults.timeoutErrorMessage = 'Timeout error';

axios.interceptors.request.use(
	function (config) {
		// Do something before request is sent

		// Set headers (bsid, session/token)
		// what happens to the managed bsid and session

		// bsid
		const bsid = Cookies.bsid;
		if (bsid) {
			axios.defaults.headers.common['x-http-bsid'] = bsid;
			config.headers['x-http-bsid'] = bsid;
		} else {
			delete axios.defaults.headers.common['x-http-bsid'];
			delete config.headers['x-http-token'];
		}

		// session
		const token = Cookies.session;
		if (token) {
			axios.defaults.headers.common['x-http-token'] = token;
			config.headers['x-http-token'] = token;
		} else {
			delete axios.defaults.headers.common['x-http-token'];
			delete config.headers['x-http-token'];
		}

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	async function (response) {
		return response;
	},
	function (error) {
		// Do something with the error response

		// generalize the error from be for fe formatting
		const errorResult = {
			status: 404,
			token: undefined,
			code: 'not_found',
			message: 'Your request could not be found. Please check and try again.',
		};

		// always for error.response
		if (error.response) {
			const response = error.response;
			console.log(response);

			// Set status
			// http code like 404, 500, etc..
			errorResult.status = response.status;

			// Set code
			// Internal error code
			if (response.data?.code) {
				errorResult.code = response.data?.code;
			}

			switch (errorResult.status) {
				// case 401: {
				// 	window.location.replace('error/401');
				// 	break;
				// }

				case 440: {
					// remove session from cookies
					Cookies.session = '';
					window.location.replace('error/session');
					break;
				}

				default:
					break;
			}
		}

		return Promise.reject(errorResult);
	}
);
