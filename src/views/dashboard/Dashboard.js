import React from 'react';

import {
	DashboardBreadcrumb,
	DashboardContent,
	DashboardHeader,
	DashboardList,
} from 'components/Dashboard';
import {ProductCard} from 'components/Product';
import DashboardFilters from './DashboardFilters';

import ITEMS from './data';

function Dashboard() {
	return (
		<div>
			<DashboardBreadcrumb />
			<DashboardHeader title='Shop All' />

			<DashboardContent itemList>
				<DashboardFilters />

				<DashboardList>
					{(ITEMS || []).map((item, index) => {
						const {name, image, price, list_description, colors, in_wishlist} =
							item || {};

						return (
							<ProductCard
								key={index}
								name={name}
								image={image}
								price={price}
								colors={colors}
								wishlist={in_wishlist}
								description={list_description}
							/>
						);
					})}
				</DashboardList>
			</DashboardContent>
		</div>
	);
}

export default Dashboard;
