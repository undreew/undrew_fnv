import React from 'react';
import {IconButton} from '@chakra-ui/react';

import PropTypes from 'prop-types';

ButtonIcon.propTypes = {
	icon: PropTypes.element.isRequired,
};

ButtonIcon.defaultProps = {
	variant: 'ghost',
};

function ButtonIcon(props) {
	const {icon, ...rest} = props;
	return (
		<IconButton aria-label={props.label} {...rest}>
			{icon}
		</IconButton>
	);
}

export default ButtonIcon;
