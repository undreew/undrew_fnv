import React from 'react';
import {Box, Button, HStack, Text} from '@chakra-ui/react';

import ListTable from '../list/ListTable';
import ListFilters from '../list/ListFilters';
import SearchBreadcrumb from './SearchBreadcrumb';

import {
	DashboardList,
	DashboardContent,
	DashboardListFooter,
} from 'components/Dashboard';

import useQuery from 'hooks/useQuery';
import useGetProducts from '../list/useGetProducts';

function Index() {
	const {query} = useQuery();
	const {isReloading, isLoading, data, hasNext, loadMore} = useGetProducts();

	const {name} = query || {};
	const itemsLength = data?.length;

	return (
		<Box>
			<SearchBreadcrumb />

			{!!name && (
				<HStack justifyContent='center' my={14}>
					<Text textStyle='bodyXl'>
						{itemsLength} {itemsLength > 1 ? 'items' : 'item'} found for "{name}
						"
					</Text>
				</HStack>
			)}

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
