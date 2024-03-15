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

function Index() {
	const {data, hasNext, loadMore, isLoading, isReloading} = useGetProducts();

	return (
		<div>
			<ProductsBreadcrumb />
			<DashboardHeader title='Shop All' count={data?.length} />

			<DashboardContent itemList>
				<ListFilters />

				<DashboardList>
					<ListTable />
					<DashboardListFooter></DashboardListFooter>
				</DashboardList>
			</DashboardContent>
		</div>
	);
}

export default Index;
