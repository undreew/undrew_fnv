import {Button, HStack} from '@chakra-ui/react';
import React from 'react';
import {FaRegHeart, FaTruck} from 'react-icons/fa';
import useAddToWishlist from './useAddToWishlist';

function DetailAddWishlist(props) {
	const {data} = props;
	const {_id} = data || {};

	const {isLoading, postData} = useAddToWishlist(_id);

	return (
		<HStack justify='space-between' mt={5}>
			<Button variant='modimaGhost' leftIcon={<FaTruck />}>
				Easy Return
			</Button>

			<Button
				onClick={postData}
				variant='modimaGhost'
				isLoading={isLoading}
				leftIcon={<FaRegHeart />}
			>
				Add To Wishlist
			</Button>
		</HStack>
	);
}

export default DetailAddWishlist;
