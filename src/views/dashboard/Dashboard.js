import React from 'react';
import {Button} from '@chakra-ui/react';

import {
	DashboardBreadcrumb,
	DashboardListFooter,
	DashboardContent,
	DashboardHeader,
	DashboardList,
} from 'components/Dashboard';
import {ProductCard} from 'components/Product';

import DashboardFilters from './DashboardFilters';

import useGetProducts from './useGetProducts';

function Dashboard() {
	const {data, hasNext, loadMore, isLoading, isReloading} = useGetProducts();

	return (
		<div>
			<DashboardBreadcrumb />
			<DashboardHeader title='Shop All' />

			<DashboardContent itemList>
				<DashboardFilters />

				<DashboardList isLoading={isReloading}>
					{(data || []).map((item, index) => {
						return <ProductCard key={index} item={item} />;
					})}
				</DashboardList>

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
			</DashboardContent>
		</div>
	);
}

export default Dashboard;
