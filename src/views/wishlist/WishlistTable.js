import React from 'react';
import {first} from 'lodash';
import urlJoin from 'url-join';
import {IMAGE_URL} from 'constants/configs';
import {ProductCard} from 'components/Product';
import {DashboardListContent} from 'components/Dashboard';

function WishlistTable(props) {
	const {isLoading, data} = props;
	return (
		<DashboardListContent isLoading={isLoading} col={{sm: 2, md: 3, lg: 4}}>
			{(data || []).map(({product_id: item}, index) => {
				const {_id, images, ...rest} = item || {};
				const {public_id} = first(images) || {};

				const imageSrc = urlJoin(IMAGE_URL, public_id || '');

				return <ProductCard id={_id} key={index} image={imageSrc} {...rest} />;
			})}
		</DashboardListContent>
	);
}

export default WishlistTable;
