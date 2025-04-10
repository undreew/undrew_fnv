import React, {Fragment, useState} from 'react';
import {
	Box,
	HStack,
	Skeleton,
	SkeletonText,
	Text,
	VStack,
} from '@chakra-ui/react';

import urlJoin from 'url-join';
import {first, map, times} from 'lodash';
import {IMAGE_URL} from 'constants/configs';
import {useCart} from 'contexts/CartContext';
import {ProductItem} from 'components/Product';

function CartProductItem({item}) {
	const {
		size,
		color,
		product_id: product,
		item_grand_total: total,
		item_total_quantity: quantity,
	} = item;

	const {images = {}, name, _id, description} = product;

	const {public_id} = first(images);
	const imageSrc = urlJoin(IMAGE_URL, public_id || '');

	const [itemQuantity, setItemQuantity] = useState(quantity);
	const {
		isAdding,
		isReducing,
		isRemoving,
		onAddToCart,
		onReduceItem,
		onRemoveItem,
	} = useCart();

	const isLoading = isAdding || isReducing || isRemoving;

	function handleIncrease() {
		setItemQuantity((prev) => prev + 1);
		onAddToCart({size, color, product_id: _id, quantity: 1});
	}

	function handleDecrease() {
		setItemQuantity((prev) => prev - 1);
		onReduceItem({size, color, product_id: _id, quantity: 1});
	}

	function handleRemove() {
		onRemoveItem({size, color, product_id: _id});
	}

	const productItem = {
		name,
		size,
		color,
		description,
		image: imageSrc,
	};

	const actions = {
		onRemove: handleRemove,
		onIncrease: handleIncrease,
		onDecrease: handleDecrease,
	};

	return (
		<ProductItem
			total={total}
			actions={actions}
			count={itemQuantity}
			product={productItem}
			isDisabled={isLoading}
		/>
	);
}

function CheckoutTableSkeleton() {
	return (
		<HStack mb={5}>
			<Skeleton height={125} width={125} />
			<VStack flexGrow={1} mr={2} h='fit-content'>
				<SkeletonText
					spacing={3}
					width='100%'
					flexGrow={1}
					noOfLines={5}
					skeletonHeight={3}
				/>
			</VStack>
		</HStack>
	);
}

function CheckoutTable({isFetching, cartItems}) {
	if (isFetching) {
		return (
			<Fragment>
				{times(6, (index) => {
					return <CheckoutTableSkeleton key={index} />;
				})}
			</Fragment>
		);
	}

	return (
		<Box>
			<Text
				sx={{
					py: 2,
					borderBottom: '1px solid',
					borderColor: 'neutral.grayDFDFDF',
				}}
				textStyle='bodyLg'
			>
				Order Summary
			</Text>

			<VStack mt={5} gap={5} maxHeight={700} overflowY='auto'>
				{map(cartItems, (item, index) => {
					return <CartProductItem item={item} key={index} />;
				})}
			</VStack>
		</Box>
	);
}

export default CheckoutTable;
