import {isEmpty, isString} from 'lodash';
import {decrypt, encrypt} from './encrypts';

import Cookie from 'universal-cookie';
import {COOKIE_PREFIX, COOKIE_SECRET_KEY} from 'constants/configs';

const cookie = new Cookie();

function createCookieName(name) {
	if (!name || !isString(name)) return null;
	return [COOKIE_PREFIX, name].filter((v) => v).join('-');
}

function getCookie(name, options) {
	const cookieName = createCookieName(name);
	return cookie.get(cookieName, options);
}

function getEncryptCookie(name, options) {
	const cookie = getCookie(name, options);
	return isEmpty(cookie) ? null : decrypt(cookie, COOKIE_SECRET_KEY);
}

function setCookie(name, value, options) {
	const cookieName = createCookieName(name);

	const cookieOptions = {
		...options,
	};

	if (isEmpty(value)) {
		cookie.remove(cookieName, cookieOptions);
	} else {
		cookie.set(cookieName, value, cookieOptions);
	}
}

function setEncryptCookie(name, value, options) {
	const cookieValue = isEmpty(value)
		? null
		: encrypt(value, COOKIE_SECRET_KEY).toString();
	setCookie(name, cookieValue, options);
}

const Cookies = {
	get session() {
		return getEncryptCookie('session');
	},

	set session(sessionId) {
		setEncryptCookie('session', sessionId);
	},

	get bsid() {
		return getEncryptCookie('bsid');
	},

	set bsid(value) {
		setEncryptCookie('bsid', value);
	},
};

export default Cookies;
