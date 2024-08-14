import {
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
} from '@chakra-ui/react';
import {CloseIcon} from '@chakra-ui/icons';
import {Box, VStack, HStack, Image, Button} from '@chakra-ui/react';

import React from 'react';
import {Link} from 'react-router-dom';
import {PulseLoader} from 'react-spinners';
import {FaShoppingBag} from 'react-icons/fa';
import {Center, IconButton, Text} from '@chakra-ui/react';

import urlJoin from 'url-join';
import PropTypes from 'prop-types';
import {IMAGE_URL} from 'constants/configs';
import {first, isEmpty, startCase} from 'lodash';

import {useCart} from 'contexts/CartContext';
import {getFormattedPrice} from 'utils/numbers';
import {PRODUCT_CURRENCY} from 'constants/products';

CartPopover.defaultProps = {
	header: 'Your shopping cart is empty',
	body: 'Discover Modimal and add products to your Bag',
};

CartPopover.propTypes = {
	header: PropTypes.string,
	body: PropTypes.string,
};

function CartPopoverItem({item = {}, isRemoving, onRemove}) {
	const {
		size,
		color,
		product_id: product,
		item_grand_total: total,
		item_total_quantity: quantity,
	} = item;
	const {images, name, _id} = product;

	const {public_id} = first(images) || {};
	const imageSrc = urlJoin(IMAGE_URL, public_id || '');

	return (
		<HStack>
			<Image src={imageSrc} w='30%' h='30%' alt='Image' />

			<Box flexGrow={1}>
				<HStack justifyContent='space-between'>
					<Text textStyle='h6'>{name}</Text>
					<IconButton
						size='xs'
						variant='ghost'
						isDisabled={isRemoving}
						onClick={() => onRemove({size, color, product_id: _id})}
					>
						<CloseIcon />
					</IconButton>
				</HStack>

				<Text textStyle='bodyMd'>Size: {startCase(size)}</Text>
				<Text textStyle='bodyMd'>Color: {startCase(color)}</Text>

				<HStack justifyContent='space-between'>
					<Text textStyle='bodyMd'>Quantity: {quantity}</Text>
					<Text textStyle='h6'>
						{getFormattedPrice(total, 'php', PRODUCT_CURRENCY, '0,0.00')}
					</Text>
				</HStack>
			</Box>
		</HStack>
	);
}

function CartPopover({header, body}) {
	const {isFetching, data, isRemoving, onRemoveItem} = useCart();

	return (
		<Popover placement='bottom' key={isFetching}>
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
									return (
										<CartPopoverItem
											key={index}
											item={item}
											isRemoving={isRemoving}
											onRemove={onRemoveItem}
										/>
									);
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
