import React from 'react';

import {ProductCard} from 'components/Product';
import {DashboardListContent} from 'components/Dashboard';

import {first} from 'lodash';
import urlJoin from 'url-join';
import {IMAGE_URL} from 'constants/configs';

function ListTable(props) {
	const {isLoading, data} = props;

	return (
		<DashboardListContent isLoading={isLoading}>
			{(data || []).map((item, index) => {
				const {name, images, price, description, wishlist} = item || {};
				const {public_id} = first(images) || {};

				const imageSrc = urlJoin(IMAGE_URL, public_id);

				return (
					<ProductCard
						key={index}
						name={name}
						price={price}
						image={imageSrc}
						wishlist={wishlist}
						description={description}
					/>
				);
			})}
		</DashboardListContent>
	);
}

export default ListTable;
