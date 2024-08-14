import {
	Button,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	VStack,
} from '@chakra-ui/react';
import {CloseIcon} from '@chakra-ui/icons';
import {Box, HStack, Image} from '@chakra-ui/react';

import React, {useEffect} from 'react';
import {PulseLoader} from 'react-spinners';
import {FaShoppingBag} from 'react-icons/fa';
import {Center, IconButton, Text} from '@chakra-ui/react';

import urlJoin from 'url-join';
import PropTypes from 'prop-types';
import {IMAGE_URL} from 'constants/configs';
import {first, isEmpty, startCase} from 'lodash';

import {useCart} from 'contexts/CartContext';
import {Link} from 'react-router-dom';

CartPopover.defaultProps = {
	header: 'Your shopping cart is empty',
	body: 'Discover Modimal and add products to your Bag',
};

CartPopover.propTypes = {
	header: PropTypes.string,
	body: PropTypes.string,
};

function CartPopoverItem({item = {}}) {
	const {
		size,
		color,
		product_id: product,
		item_grand_total: total,
		item_total_quantity: quantity,
	} = item;
	const {images, name} = product;

	const {public_id} = first(images) || {};
	const imageSrc = urlJoin(IMAGE_URL, public_id || '');

	return (
		<HStack>
			<Image src={imageSrc} w='30%' h='30%' alt='Image' />

			<Box flexGrow={1}>
				<HStack justifyContent='space-between'>
					<Text textStyle='h6'>{name}</Text>
					<IconButton variant='ghost' size='xs'>
						<CloseIcon />
					</IconButton>
				</HStack>

				<Text>Size: {startCase(size)}</Text>
				<Text>Color: {startCase(color)}</Text>

				<HStack justifyContent='space-between'>
					<Text>Quantity: {quantity}</Text>
					<Text>{total}</Text>
				</HStack>
			</Box>
		</HStack>
	);
}

function CartPopover({header, body}) {
	const {isFetching, data, onGetCart} = useCart();

	useEffect(() => {
		onGetCart();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Popover placement='bottom'>
			<PopoverTrigger>
				<IconButton variant='ghost' aria-label='Add to Cart'>
					<FaShoppingBag />
				</IconButton>
			</PopoverTrigger>

			<PopoverContent color='primary.main' height='fit-content'>
				<PopoverBody>
					{isFetching ? (
						<Center display='flex' flexDirection='column'>
							<PulseLoader loading color='#36d7b7' />
						</Center>
					) : isEmpty(data) ? (
						<Center display='flex' flexDirection='column'>
							<Text textStyle='h6'>{header}</Text>
							<Text textStyle='bodySm'>{body}</Text>
						</Center>
					) : (
						<VStack gap={5}>
							<Text textStyle='h5' textAlign='center'>
								Your Cart
							</Text>
							<VStack gap={5}>
								{data.map((item, index) => {
									return <CartPopoverItem key={index} item={item} />;
								})}
							</VStack>

							<Button variant='modimaSolid' w='100%' as={Link} to='/check-out'>
								Check Out
							</Button>
						</VStack>
					)}
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
}

export default CartPopover;
