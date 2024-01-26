import CryptoJS from 'crypto-js';

export function encrypt(value, secret) {
	const string = JSON.stringify(value);

	return CryptoJS.AES.encrypt(string, secret);
}

export function decrypt(value, secret) {
	const bytes = CryptoJS.AES.decrypt(value, secret);
	const string = bytes.toString(CryptoJS.enc.Utf8);

	return JSON.parse(string);
}
