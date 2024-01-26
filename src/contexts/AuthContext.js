import {isEmpty} from 'lodash';
import Cookies from 'utils/cookies';
import React, {createContext, useContext, useMemo, useState} from 'react';

const AuthContext = createContext();

function AuthProvider(props) {
	const {children} = props;

	const [session, setSession] = useState(
		!!Cookies.session ? Cookies.session : null
	);

	const isAuth = useMemo(
		() => (session ? !isEmpty(session) : false),
		[session]
	);

	function setAuth(sessionId) {
		Cookies.session = sessionId;
		setSession(sessionId);
	}

	function removeAuth() {
		Cookies.session = '';
		setSession(null);
	}

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setAuth,
				removeAuth,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

const useAuth = () => useContext(AuthContext);

export {AuthContext, AuthProvider, useAuth};
