import {useMemo, useState, useEffect, useContext, createContext} from 'react';

import {isEmpty} from 'lodash';
import Cookies from 'utils/cookies';

import useGetAccountSession from 'hooks/useGetAccountSession';

const AuthContext = createContext();

function AuthProvider(props) {
	const {children} = props;

	const [session, setSession] = useState(
		!!Cookies.session ? Cookies.session : null
	);

	const [authAccount, setAuthAccount] = useState({});

	const isAuth = useMemo(
		() => (session ? !isEmpty(session) : false),
		[session]
	);

	const {
		isLoading,
		getSessionAccount,
		data: sessionAccount,
	} = useGetAccountSession(session);

	async function handleSession() {
		if (session) {
			await getSessionAccount(session);
		}
	}

	useEffect(() => {
		if (!isEmpty(session)) {
			handleSession();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session]);

	useEffect(() => {
		if (!isLoading && sessionAccount) {
			setAuthAccount(sessionAccount);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

	function setAuth(sessionId, remember = true) {
		let obj = {
			session: sessionId,
		};

		if (remember) {
			obj.remember = remember;
		}

		Cookies.session = obj;
		setSession(sessionId);
	}

	function removeAuth() {
		Cookies.session = '';
		setSession(null);
	}

	const {account, account_permissions} = authAccount || {};

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setAuth,
				removeAuth,

				account,
				account_permissions,
			}}
		>
			{isLoading ? <>isLoading</> : children}
			{/* {children} */}
		</AuthContext.Provider>
	);
}

const useAuth = () => useContext(AuthContext);

export {AuthContext, AuthProvider, useAuth};
