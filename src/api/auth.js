import {fetcher} from 'utils/fetcher';

export const postRegister = (formData) => {
	return fetcher('POST', 'auth/register', formData);
};

export const postLoginEmail = (formData) => {
	return fetcher('POST', 'auth/login-email', formData);
};

export const postLoginPassword = (formData) => {
	return fetcher('POST', 'auth/login-password', formData);
};

export const postAuthLogout = () => {
	return fetcher('POST', 'auth/logout');
};
