import React from 'react';
import {Navigate} from 'react-router-dom';

import {useAuth} from 'contexts/AuthContext';
import PAGE_ACCESS from 'constants/page-access';

function withRouteLayout(Component) {
	return function (props) {
		const {access} = props;
		const {isAuth} = useAuth();

		if (access === PAGE_ACCESS.public && isAuth) {
			return <Navigate to='/products' />;
		}

		if (access === PAGE_ACCESS.private) {
			if (isAuth) {
			} else {
				return <Navigate to='/login' />;
			}
		}

		return <Component {...props} />;
	};
}

export default withRouteLayout;
