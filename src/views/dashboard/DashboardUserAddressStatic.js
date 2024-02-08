import {Box, Text} from '@chakra-ui/react';
import React from 'react';

function DashboardUserAddressStatic(props) {
	const {data} = props;

	const {address} = data || {};

	return (
		<Box mb={3}>
			{(address || []).map((item, index) => {
				return (
					<Text textStyle='bodySm' key={index}>
						{item}
					</Text>
				);
			})}
		</Box>
	);
}

export default DashboardUserAddressStatic;
