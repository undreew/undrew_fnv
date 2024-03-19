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
	VStack,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

ProductCard.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	colors: PropTypes.array,
	description: PropTypes.string,
	wishlist: PropTypes.bool,
};

function ProductCard(props) {
	const {id, name, image, price, colors, description, wishlist} = props;

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
					<VStack alignItems='start' flexGrow={1}>
						<Text textStyle='h6' as={Link} to={id}>
							{name}
						</Text>

						<Text textStyle='bodyMd'>{description}</Text>

						<Text as='div' textStyle='bodyMd'>
							{(colors || []).map((color, index) => {
								const {name} = color || {};
								return (
									<Box
										w='25px'
										height='25px'
										borderRadius='50%'
										bgColor={name}
										color={name}
										key={index}
									/>
								);
							})}
						</Text>
					</VStack>

					<Text textStyle='h6'>{price}</Text>
				</HStack>
			</CardFooter>
		</Card>
	);
}

export default ProductCard;
