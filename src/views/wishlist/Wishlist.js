import React from 'react';
import {Box} from '@chakra-ui/react';

import {useWishlist} from 'contexts/WishlistContext';
import {DashboardHeader, DashboardList} from 'components/Dashboard';

import WishlistTable from './WishlistTable';

function Wishlist() {
	const {data, isFetching} = useWishlist();

	return (
		<Box>
			<DashboardHeader title='Wishlist' count={data?.length} />

			<DashboardList>
				<WishlistTable isLoading={isFetching} data={data} />
			</DashboardList>
		</Box>
	);
}

export default Wishlist;
