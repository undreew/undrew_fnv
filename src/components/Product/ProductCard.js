import React from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';

import {
	Badge,
	Card,
	CardFooter,
	CardHeader,
	HStack,
	IconButton,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

ProductCard.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	description: PropTypes.string,
	wishlist: PropTypes.bool,
};

function ProductCard(props) {
	const {name, image, price, description, wishlist} = props;

	return (
		<Card>
			<CardHeader>
				<HStack justify='space-between'>
					<Badge>New</Badge>

					<IconButton variant='ghost' color='primary.400'>
						{wishlist ? <FaHeart /> : <FaRegHeart />}
					</IconButton>
				</HStack>
			</CardHeader>

			<Image src={image} />

			<CardFooter>
				<HStack w='100%' justify='space-between'>
					<VStack alignItems='start'>
						<Text textStyle='h6'>{name}</Text>
						<Text textStyle='bodyMd'>{description}</Text>
						{/* <Text textStyle='bodyMd'>{colors[0]}</Text> */}
					</VStack>

					<Text textStyle='h6'>{price}</Text>
				</HStack>
			</CardFooter>
		</Card>
	);
}

export default ProductCard;
