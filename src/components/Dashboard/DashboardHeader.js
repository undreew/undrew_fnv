import React from 'react';
import {Divider, HStack, Text} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import {PageContainer} from 'components/Page';

DashboardHeader.propTypes = {
	count: PropTypes.number,
	title: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

function DashboardHeader(props) {
	const {count, title, description} = props;

	return (
		<PageContainer>
			<HStack gap={3}>
				<Text textStyle='h2' mt={2}>
					{title}
				</Text>

				<Divider orientation='vertical' size='lg' h='20px' />

				<Text textStyle='bodyXl'>{count}</Text>
			</HStack>

			<Text textStyle='captionMd'>{description}</Text>
		</PageContainer>
	);
}

export default DashboardHeader;
