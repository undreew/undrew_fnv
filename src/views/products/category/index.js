import React from 'react';
import {useParams} from 'react-router-dom';

import {startCase} from 'lodash';
import {Box, Button} from '@chakra-ui/react';
import {
	DashboardList,
	DashboardHeader,
	DashboardContent,
	DashboardListFooter,
} from 'components/Dashboard';

import ListTable from '../list/ListTable';
import ListFilters from '../list/ListFilters';
import useGetProducts from '../list/useGetProducts';

import CategoryBreadcrumbs from './CategoryBreadcrumbs';

function Index() {
	const {category} = useParams();
	const {isReloading, isLoading, data, hasNext, loadMore} =
		useGetProducts(category);

	return (
		<Box>
			<CategoryBreadcrumbs category={category} />
			<DashboardHeader title={startCase(category)} count={data?.length} />

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
		</Box>
	);
}

export default Index;
