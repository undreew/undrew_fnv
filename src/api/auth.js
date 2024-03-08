import {fetcher} from 'utils/fetcher';

export const postRegister = (formData) => {
	return fetcher('POST', 'auth/register', formData);
};

export const postAuthLogin = (formData) => {
	return fetcher('POST', 'auth/login', formData);
};

export const postAuthLogout = () => {
	return fetcher('POST', 'auth/logout');
};

export const getAuthSession = (sessionId) => {
	return fetcher('GET', `auth/session/${sessionId}`);
};
