import React from 'react';
import {Box, Divider, HStack, Text} from '@chakra-ui/react';

import PropTypes from 'prop-types';

DashboardHeader.propTypes = {
	count: PropTypes.number,
	title: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

function DashboardHeader(props) {
	const {count, title, description} = props;

	return (
		<Box>
			<HStack gap={3}>
				<Text textStyle='h2' mt={2}>
					{title}
				</Text>

				<Divider orientation='vertical' size='lg' h='20px' />

				<Text textStyle='bodyXl'>{count || 'Loading...'}</Text>
			</HStack>

			<Text textStyle='captionMd'>{description}</Text>
		</Box>
	);
}

export default DashboardHeader;
