import React from 'react';
import {Button, HStack} from '@chakra-ui/react';
import {FaRegHeart, FaTruck} from 'react-icons/fa';

import {useWishlist} from 'contexts/WishlistContext';

function DetailAddWishlist(props) {
	const {data} = props;
	const {_id: product_id} = data || {};

	const {isAdding, onAddToWishlist} = useWishlist();

	return (
		<HStack justify='space-between' mt={5}>
			<Button variant='modimaGhost' leftIcon={<FaTruck />}>
				Easy Return
			</Button>

			<Button
				isLoading={isAdding}
				variant='modimaGhost'
				leftIcon={<FaRegHeart />}
				onClick={() => onAddToWishlist({product_id})}
			>
				Add To Wishlist
			</Button>
		</HStack>
	);
}

export default DetailAddWishlist;
