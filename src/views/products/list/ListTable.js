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
				const {_id, name, images, price, variants, description, wishlist} =
					item || {};
				const {colors} = first(variants) || {};
				const {public_id} = first(images) || {};

				const imageSrc = urlJoin(IMAGE_URL, public_id);

				return (
					<ProductCard
						id={_id}
						key={index}
						name={name}
						price={price}
						colors={colors}
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
