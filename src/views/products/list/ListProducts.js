import React from 'react';

import {
	DashboardList,
	DashboardHeader,
	DashboardContent,
	DashboardListFooter,
} from 'components/Dashboard';

import ListTable from './ListTable';
import ListFilters from './ListFilters';
import ProductsBreadcrumb from '../ProductsBreadcrumb';

import useGetProducts from './useGetProducts';
import {Box, Button, Image} from '@chakra-ui/react';

import dashboard from 'assets/images/dashboard.png';

function ListProducts(props) {
	const {Breadcrumb, Header, hasImage = true, queries} = props;
	const {data, hasNext, loadMore, isLoading, isReloading} =
		useGetProducts(queries);

	return (
		<Box>
			{!!Breadcrumb ? <Breadcrumb /> : <ProductsBreadcrumb />}

			{!!Header ? (
				<Header count={data.length} />
			) : (
				<DashboardHeader title='Shop All' count={data?.length} />
			)}

			{hasImage && (
				<Image
					mt={3}
					mb={8}
					height={655}
					width='100%'
					src={dashboard}
					objectFit='cover'
					objectPosition='85% 10%'
					alt='Shop All - Dashboard'
				/>
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

export default ListProducts;
