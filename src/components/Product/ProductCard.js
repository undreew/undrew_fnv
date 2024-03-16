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

import {first} from 'lodash';
import {IMAGE_URL} from 'constants/configs';

import PropTypes from 'prop-types';

ProductCard.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
		images: PropTypes.array,
		price: PropTypes.number,
		description: PropTypes.string,
		wishlist: PropTypes.bool,
	}),
};

function ProductCard(props) {
	const {item} = props;
	const {name, images, price, description, wishlist} = item; // colors
	const {public_id} = first(images) || {}; // temp

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

			<Image src={`${IMAGE_URL}${public_id}`} />

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
