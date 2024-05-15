import React, {useState} from 'react';
import {Box, Button} from '@chakra-ui/react';

import DetailProductSize from './DetailProductSize';
import useAddToCart from './useAddToCart';

function DetailProductAddCart(props) {
	const {data} = props;

	const [color, setColor] = useState('');
	const {isLoading, postData} = useAddToCart();

	return (
		<Box>
			<DetailProductSize data={data} onChange={setColor} />

			<Button
				mt={5}
				w='100%'
				variant='modimaSolid'
				isLoading={isLoading}
				onClick={() => postData(color)}
			>
				Add To Cart
			</Button>
		</Box>
	);
}

export default DetailProductAddCart;
