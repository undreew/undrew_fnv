import React from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';

import {Badge, Box, Card, CardFooter} from '@chakra-ui/react';
import {HStack, IconButton, Image, Text, VStack} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {ColorList} from 'components/Color';
import {PRODUCT_CURRENCY} from 'constants/products';
import {getFormattedPrice} from 'utils/numbers';
import {isNull} from 'lodash';

ProductCard.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	variants: PropTypes.array,
	description: PropTypes.string,
	wishlist: PropTypes.bool,
	wishlistAction: PropTypes.func,
};

function ProductCard(props) {
	const {is_new} = props; // in_stock
	const {in_wishlist, wishlistAction} = props;
	const {id, name, image, price, variants} = props;
	const {category, currency, list_description} = props;

	const productId = `/products/${category}/${id}`;

	return (
		<Card variant='modimaCard'>
			<Image
				src={image}
				alt='Image'
				height={450}
				flexGrow={1}
				display='flex'
				objectFit='cover'
			/>

			{is_new && (
				<Box position='absolute' left='10px' top='10px'>
					<Badge variant='boxy' colorScheme='primary'>
						<Text textStyle='bodySm'>New</Text>
					</Badge>
				</Box>
			)}

			{!isNull(in_wishlist) && (
				<Box position='absolute' right='10px' top='10px'>
					<IconButton
						isRound
						variant='ghost'
						fontSize='1.25rem'
						onClick={wishlistAction}
						icon={in_wishlist ? <FaHeart /> : <FaRegHeart />}
						color={in_wishlist ? 'error.main' : 'primary.500'}
						_hover={{color: in_wishlist ? 'error.light' : 'primary.700'}}
					/>
				</Box>
			)}

			<CardFooter>
				<VStack w='100%' alignItems='start'>
					<Text as={Link} textStyle='h6' to={productId}>
						{name}
					</Text>
					{list_description && (
						<Text textStyle='bodyMd'>{list_description}</Text>
					)}

					{price && variants && (
						<HStack w='100%' justifyContent='space-between'>
							<ColorList items={variants} mt={2} />

							<Text textStyle='h6'>
								{getFormattedPrice(
									price,
									currency || 'php',
									PRODUCT_CURRENCY,
									'0,0.00'
								)}
							</Text>
						</HStack>
					)}
				</VStack>
			</CardFooter>
		</Card>
	);
}

export default ProductCard;
