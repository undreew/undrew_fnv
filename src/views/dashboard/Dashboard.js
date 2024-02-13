import React from 'react';

import {
	DashboardBreadcrumb,
	DashboardContent,
	DashboardHeader,
	DashboardList,
} from 'components/Dashboard';
import DashboardFilters from './DashboardFilters';
import ITEMS from './data';

import {ProductCard} from 'components/Product';

// import db from 'assets/images/dashboard.png';

function Dashboard() {
	return (
		<div>
			<DashboardBreadcrumb />
			<DashboardHeader title='Shop All' />

			{/* <Image src={db} backgroundSize='cover' /> */}
			{/* <Image
				src={db}
				bgRepeat='no-repeat'
				bgPosition='center center'
				bgSize='cover'
			/> */}

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
