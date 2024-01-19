import React from 'react';
import {NavLink} from 'react-router-dom';
import {LogoImage} from 'components/Logo';

LinkLogo.defaultProps = {
	to: '/',
};

function LinkLogo(props) {
	const {to, logoProps} = props;

	return (
		<NavLink to={to}>
			<LogoImage {...logoProps} />
		</NavLink>
	);
}

export default LinkLogo;
