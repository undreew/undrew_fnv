import React from 'react';
import {Box} from '@chakra-ui/react';

import {useWishlist} from 'contexts/WishlistContext';
import {DashboardHeader, DashboardList} from 'components/Dashboard';

import WishlistTable from './WishlistTable';

import {some} from 'lodash';

function Wishlist() {
	const {data, isFetching, onRemoveFromWishlist, isRemoving} = useWishlist();
	const isLoading = some([isFetching, isRemoving]);

	return (
		<Box>
			<DashboardHeader title='Wishlist' count={data?.length} />

			<DashboardList>
				<WishlistTable
					data={data}
					isLoading={isLoading}
					onRemove={onRemoveFromWishlist}
				/>
			</DashboardList>
		</Box>
	);
}

export default Wishlist;
