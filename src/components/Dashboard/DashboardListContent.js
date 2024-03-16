import React from 'react';
import {SimpleGrid} from '@chakra-ui/react';

import PropTypes from 'prop-types';

DashboardListContent.propTypes = {
	isLoading: PropTypes.bool,
};

DashboardListContent.defaultProps = {
	spacing: 5,
	col: {sm: 1, md: 2, lg: 2},
};

function DashboardListContent(props) {
	const {col, spacing, children, isLoading, ...rest} = props;

	return (
		<SimpleGrid columns={col} spacing={spacing} {...rest}>
			{isLoading ? <div>loading...</div> : children}
		</SimpleGrid>
	);
}

export default DashboardListContent;
