import React from 'react';

import {
	DashboardContent,
	DashboardHeader,
	DashboardList,
	DashboardListFooter,
} from 'components/Dashboard';

import ListTable from './ListTable';
import ListFilters from './ListFilters';
import ProductsBreadcrumb from '../ProductsBreadcrumb';

import useGetProducts from './useGetProducts';
import {Button} from '@chakra-ui/react';

function Index() {
	const {data, hasNext, loadMore, isLoading, isReloading} = useGetProducts();

	return (
		<div>
			<ProductsBreadcrumb />
			<DashboardHeader title='Shop All' count={data?.length} />

			<DashboardContent itemList>
				<ListFilters />

				<DashboardList>
					<ListTable isLoading={isReloading} data={data} />

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

export default Index;
