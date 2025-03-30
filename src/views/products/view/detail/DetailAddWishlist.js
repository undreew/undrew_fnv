import React from 'react';
import {Button, HStack} from '@chakra-ui/react';
import {FaRegHeart, FaTruck} from 'react-icons/fa';

import {useAuth} from 'contexts/AuthContext';
import {useWishlist} from 'contexts/WishlistContext';
import {enqueueSnackbar} from 'notistack';

function DetailAddWishlist(props) {
	const {data} = props;
	const {_id: product_id, in_wishlist} = data || {};

	const {isAuth} = useAuth();
	const {isAdding, onAddToWishlist} = useWishlist();

	return (
		<HStack justify='space-between' mt={5}>
			<Button variant='modimaGhost' leftIcon={<FaTruck />}>
				Easy Return
			</Button>

			<Button
				isLoading={isAdding}
				variant='modimaGhost'
				isDisabled={in_wishlist}
				leftIcon={<FaRegHeart />}
				onClick={() => {
					if (!isAuth) {
						return enqueueSnackbar('You must be logged in.', {
							variant: 'error',
							autoHideDuration: 1500,
						});
					}
					onAddToWishlist({product_id});
				}}
			>
				{in_wishlist ? 'Watchlisted' : 'Add To Wishlist'}
			</Button>
		</HStack>
	);
}

export default DetailAddWishlist;
