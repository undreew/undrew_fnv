import React from 'react';
import {Box} from '@chakra-ui/react';

import PropTypes from 'prop-types';

import DetailAddWishlist from './DetailAddWishlist';
import DetailProductStatic from './DetailProductStatic';
import DetailProductAddCart from './DetailProductAddCart';

DetailProduct.propTypes = {
	data: PropTypes.object.isRequired,
};

function DetailProduct(props) {
	const {data} = props;

	return (
		<Box display='flex' flexDir='column' justifyContent='space-between'>
			<DetailProductStatic data={data} />

			<DetailProductAddCart data={data} />

			<DetailAddWishlist data={data} />
		</Box>
	);
}

export default DetailProduct;
