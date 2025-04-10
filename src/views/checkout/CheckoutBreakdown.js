import React from 'react';
import {Box, Button, HStack, SimpleGrid, Text} from '@chakra-ui/react';

import {map} from 'lodash';
import {getFormattedPrice} from 'utils/numbers';
import {PRODUCT_CURRENCY, PRODUCT_TAX} from 'constants/products';

function CheckoutBreakdown({
	cartTotalQuantity,
	cartGrandTotal,
	isCheckingOut,
	onCheckout,
}) {
	const items = [
		{
			label: `Subtotal (${cartTotalQuantity})`,
			content: getFormattedPrice(cartGrandTotal, 'php', PRODUCT_CURRENCY),
		},
		{
			label: 'Tax',
			content: getFormattedPrice(PRODUCT_TAX, 'php', PRODUCT_CURRENCY),
		},
		{
			label: 'Shipping',
			content: 'Free',
		},
	];

	return (
		<Box mt={{base: 10, sm: 10, md: 0}}>
			<SimpleGrid
				columns={2}
				spacing={5}
				sx={{
					py: 2,
					px: {sm: 0, md: 5},
					borderBottom: '1px solid',
					borderColor: 'neutral.grayDFDFDF',
				}}
			>
				<Text textStyle='bodyLg'>Details</Text>
				<Text textStyle='bodyLg'>Total</Text>
			</SimpleGrid>

			<Box
				sx={{
					mt: 5,
					px: {sm: 0, md: 5},
				}}
			>
				<Box borderBottom='1px solid' borderColor='neutral.grayDFDFDF'>
					{map(items, (item, index) => {
						const {label, content} = item;
						return (
							<SimpleGrid key={index} columns={2} spacing={5} mb={3}>
								<Text textStyle='bodyLg'>{label}</Text>
								<Text textStyle='bodyLg'>{content}</Text>
							</SimpleGrid>
						);
					})}
				</Box>

				<SimpleGrid
					columns={2}
					spacing={5}
					sx={{
						mb: 3,
						py: 5,
						borderBottom: '1px solid',
						borderColor: 'neutral.grayDFDFDF',
					}}
				>
					<Text textStyle='bodyLg' fontWeight='bold'>
						Order Totals:
					</Text>
					<Text textStyle='bodyLg' fontWeight='bold'>
						{getFormattedPrice(
							cartGrandTotal + PRODUCT_TAX,
							'php',
							PRODUCT_CURRENCY
						)}
					</Text>
				</SimpleGrid>

				<Text textStyle='overlineSm'>
					The total amount you pay includes all applicable customs duties &
					taxes. We guarantee no additional charges on delivery.
				</Text>

				<HStack justifyContent='end' mt={5}>
					<Button
						w='100%'
						variant='modimaSolid'
						onClick={onCheckout}
						isLoading={isCheckingOut}
						isDisabled={isCheckingOut}
					>
						Checkout
					</Button>
				</HStack>
			</Box>
		</Box>
	);
}

export default CheckoutBreakdown;
