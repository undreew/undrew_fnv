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
import {Link} from 'react-router-dom';
import {ColorList} from 'components/Color';

ProductCard.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	variants: PropTypes.array,
	description: PropTypes.string,
	wishlist: PropTypes.bool,
};

function ProductCard(props) {
	const {id, name, image, price, variants, description, wishlist} = props;

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

			<Image src={image} display='flex' flexGrow={1} alt='Image' />

			<CardFooter>
				<HStack w='100%' justify='space-between'>
					<VStack alignItems='start' flexGrow={1}>
						<Text textStyle='h6' as={Link} to={id}>
							{name}
						</Text>

						<Text textStyle='bodyMd'>{description}</Text>

						<ColorList items={variants} />
					</VStack>

					<Text textStyle='h6'>{price}</Text>
				</HStack>
			</CardFooter>
		</Card>
	);
}

export default ProductCard;
