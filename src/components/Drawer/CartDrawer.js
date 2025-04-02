import {FaShoppingBag} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';
import React, {createElement, useEffect} from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerContent,
} from '@chakra-ui/react';
import {CloseIcon} from '@chakra-ui/icons';
import {Skeleton, SkeletonText} from '@chakra-ui/react';
import {VStack, HStack, Image, Box, Stack} from '@chakra-ui/react';
import {IconButton, Text, Button, useDisclosure} from '@chakra-ui/react';
import {DrawerHeader, DrawerOverlay, DrawerCloseButton} from '@chakra-ui/react';

import urlJoin from 'url-join';
import {getFormattedPrice} from 'utils/numbers';
import {first, isEmpty, map, startCase, times} from 'lodash';

import {IMAGE_URL} from 'constants/configs';
import {PRODUCT_CURRENCY} from 'constants/products';

import {useCart} from 'contexts/CartContext';

function CartDrawerItem({item = {}, isRemoving, onRemove}) {
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

function CartDrawerSkeleton() {
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

function CartEmptyState() {
	const emptyStateBtns = [
		{to: '/products', children: 'Collection'},
		{to: '/new-in', children: 'New In'},
		{to: '/best-sellers', children: 'Best Sellers'},
	];
	return (
		<Stack height='100%' alignItems='center' justifyContent='center'>
			<Text textStyle='h6'>Your Shopping Bag Is Empty</Text>

			<Box mt={3}>
				<Text textStyle='bodySm' textAlign='center'>
					Discover Modimal
				</Text>
				<Text textStyle='bodySm'>And Add Products To Your Bag</Text>
			</Box>

			<VStack mt={3} gap={5} w='100%'>
				{map(emptyStateBtns, (item, index) => {
					const props = {
						w: 200,
						as: Link,
						flexGrow: 1,
						variant: 'modimaSolid',
						...item,
					};
					return createElement(Button, {...props, key: index});
				})}
			</VStack>
		</Stack>
	);
}

const DEFAULT_DATA_LENGTH = 2;

function CartDrawer() {
	const {pathname} = useLocation();
	const {isOpen, onOpen, onClose} = useDisclosure();
	const {isFetching, data, isRemoving, onRemoveItem} = useCart();

	useEffect(() => {
		if (pathname) onClose();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<>
			<IconButton variant='ghost' aria-label='Add to Cart' onClick={onOpen}>
				<FaShoppingBag />
			</IconButton>

			<Drawer size='sm' placement='right' isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					{!isEmpty(data) && (
						<DrawerHeader>
							<Text textStyle='h5' textAlign='center'>
								Your Cart
							</Text>
						</DrawerHeader>
					)}

					<DrawerBody py={10}>
						{isFetching ? (
							<>
								{times(DEFAULT_DATA_LENGTH, (index) => {
									return <CartDrawerSkeleton key={index} />;
								})}
							</>
						) : isEmpty(data) ? (
							<CartEmptyState />
						) : (
							<VStack gap={5}>
								{map(data, (item, index) => {
									return (
										<CartDrawerItem
											key={index}
											item={item}
											isRemoving={isRemoving}
											onRemove={onRemoveItem}
										/>
									);
								})}
							</VStack>
						)}
					</DrawerBody>

					{!isEmpty(data) && (
						<DrawerFooter>
							<Button
								w='100%'
								onClick={onClose}
								variant='modimaSolid'
								isDisabled={isFetching || isRemoving}
							>
								Checkout
							</Button>
						</DrawerFooter>
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default CartDrawer;
