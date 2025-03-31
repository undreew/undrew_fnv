import React from 'react';

import {ProductCard} from 'components/Product';
import {DashboardListContent} from 'components/Dashboard';

import {first, isEmpty} from 'lodash';

import urlJoin from 'url-join';
import {IMAGE_URL} from 'constants/configs';
import {HStack, Text} from '@chakra-ui/react';

function ListTable(props) {
	const {isLoading, data} = props;

	if (isEmpty(data)) {
		return (
			<HStack justifyContent='center' alignItems='center'>
				<Text textStyle='bodyXl'>0 item/s to show</Text>
			</HStack>
		);
	}

	return (
		<DashboardListContent isLoading={isLoading}>
			{(data || []).map((item, index) => {
				const {_id, images, ...rest} = item || {};
				const {public_id} = first(images) || {};

				const imageSrc = urlJoin(IMAGE_URL, public_id || '');

				return <ProductCard id={_id} key={index} image={imageSrc} {...rest} />;
			})}
		</DashboardListContent>
	);
}

export default ListTable;
