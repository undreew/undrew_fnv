import React from 'react';

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
import {FaHeart, FaRegHeart} from 'react-icons/fa';

function ProductCard(props) {
	const {name, image, price, description, wishlist} = props; // colors
	const {public_id} = image || {};

	return (
		<Card>
			<CardHeader>
				<HStack justify='space-between'>
					<Badge>New</Badge>

					<IconButton variant='ghost'>
						{wishlist ? <FaHeart /> : <FaRegHeart />}
					</IconButton>
				</HStack>
			</CardHeader>

			<Image
				src={`https://res.cloudinary.com/jamie231-cloudinary/image/upload/v1693790862/${public_id}`}
			/>

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
