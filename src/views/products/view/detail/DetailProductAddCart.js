import React, {useState} from 'react';
import {Box, Button} from '@chakra-ui/react';

import DetailProductSize from './DetailProductSize';

import {useCart} from 'contexts/CartContext';
import {useAuth} from 'contexts/AuthContext';
import {enqueueSnackbar} from 'notistack';

function DetailProductAddCart(props) {
	const {data} = props;

	const {isAuth} = useAuth();
	const [size, setSize] = useState(null);
	const [color, setColor] = useState(null);
	const {isAdding, onAddToCart} = useCart();

	return (
		<Box>
			<DetailProductSize
				data={data}
				color={color}
				onChangeSize={setSize}
				onChangeColor={setColor}
			/>

			<Button
				mt={5}
				w='100%'
				variant='modimaSolid'
				isLoading={isAdding}
				onClick={() => {
					if (!size) {
						return enqueueSnackbar('Please select a size', {
							variant: 'error',
							autoHideDuration: 1500,
						});
					}
					if (!isAuth) {
						return enqueueSnackbar('You must be logged in.', {
							variant: 'error',
							autoHideDuration: 1500,
						});
					}
					onAddToCart({
						size,
						color,
						quantity: 1, // temp
						product_id: data._id,
					});
				}}
			>
				Add To Cart
			</Button>
		</Box>
	);
}

export default DetailProductAddCart;
