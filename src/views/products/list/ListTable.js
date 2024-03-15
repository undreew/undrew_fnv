import React from 'react';

import {ProductCard} from 'components/Product';
import {DashboardListContent} from 'components/Dashboard';

function ListTable(props) {
	const {isLoading, data} = props;

	return (
		<DashboardListContent isLoading={isLoading}>
			{(data || []).map((item, index) => {
				return <ProductCard key={index} item={item} />;
			})}
		</DashboardListContent>
	);
}

export default ListTable;
