import React from 'react';

import {
	DashboardBreadcrumb,
	DashboardContent,
	DashboardHeader,
	DashboardList,
	DashboardListContent,
	DashboardListFooter,
} from 'components/Dashboard';
import {ProductCard} from 'components/Product';
import DashboardFilters from './DashboardFilters';

// import ITEMS from './data';
import {Button} from '@chakra-ui/react';
import useGetProducts from './useGetProducts';

function Dashboard() {
	const {data, hasNext, loadMore, isLoading, isReloading} = useGetProducts();

	return (
		<div>
			<DashboardBreadcrumb />
			<DashboardHeader title='Shop All' />

			<DashboardContent itemList>
				<DashboardFilters />

				<DashboardList>
					<DashboardListContent isLoading={isReloading}>
						{(data || []).map((item, index) => {
							const {
								name,
								image,
								price,
								list_description,
								colors,
								in_wishlist,
							} = item || {};

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
					</DashboardListContent>

					{hasNext && (
						<DashboardListFooter direction='row' mt={5} justify='center'>
							<Button
								isLoading={isLoading}
								variant='modimaOutline'
								onClick={() => loadMore(false)}
							>
								Load more
							</Button>
						</DashboardListFooter>
					)}
				</DashboardList>
			</DashboardContent>
		</div>
	);
}

export default Dashboard;
