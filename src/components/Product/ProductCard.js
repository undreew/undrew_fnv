import React from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';

import {
	Badge,
	Box,
	Card,
	CardFooter,
	CardHeader,
	HStack,
	IconButton,
	Image,
	Text,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {ColorList} from 'components/Color';
import {PRODUCT_CURRENCY} from 'constants/products';
import {getFormattedPrice} from 'utils/numbers';

ProductCard.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	variants: PropTypes.array,
	description: PropTypes.string,
	wishlist: PropTypes.bool,
};

function ProductCard(props) {
	const {id, name, image, price, variants, description, wishlist, currency} =
		props;

	return (
		<Card variant='modimaCard' as={Link} to={id}>
			<CardHeader>
				<HStack justify='space-between'>
					<Badge>New</Badge>

					<IconButton variant='ghost' color='primary.400'>
						{wishlist ? <FaHeart /> : <FaRegHeart />}
					</IconButton>
				</HStack>
			</CardHeader>

			<Image src={image} display='flex' flexGrow={1} alt='Image' />

			<CardFooter>
				<HStack w='100%' justify='space-between'>
					<Box alignItems='start'>
						<Text textStyle='h6'>{name}</Text>
						<Text textStyle='bodyMd'>{description}</Text>

						<ColorList items={variants} mt={2} />
					</Box>

					<Text textStyle='h6'>
						{getFormattedPrice(
							price,
							currency || 'php',
							PRODUCT_CURRENCY,
							'0,0.00'
						)}
					</Text>
				</HStack>
			</CardFooter>
		</Card>
	);
}

export default ProductCard;
