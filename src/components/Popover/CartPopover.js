import {
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	PopoverCloseButton,
} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import {PulseLoader} from 'react-spinners';
import {FaShoppingBag} from 'react-icons/fa';
import {Center, IconButton, Text} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

import {useCart} from 'contexts/CartContext';

CartPopover.defaultProps = {
	header: 'Your shopping cart is empty',
	body: 'Discover Modimal and add products to your Bag',
};

CartPopover.propTypes = {
	header: PropTypes.string,
	body: PropTypes.string,
};

function CartPopover({header, body}) {
	const {isFetching, data, onGetCart} = useCart();

	useEffect(() => {
		onGetCart();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Popover placement='bottom'>
			<PopoverTrigger>
				<IconButton variant='ghost' aria-label='Add to Cart'>
					<FaShoppingBag />
				</IconButton>
			</PopoverTrigger>

			<PopoverContent color='primary.main'>
				<PopoverCloseButton />

				<PopoverBody>
					<Center height='360px' display='flex' flexDirection='column'>
						{isFetching ? (
							<PulseLoader loading color='#36d7b7' />
						) : isEmpty(data) ? (
							<>
								<Text textStyle='h6'>{header}</Text>
								<Text textStyle='bodySm'>{body}</Text>
							</>
						) : (
							<>
								<Text textStyle='bodySm'>Items</Text>
							</>
						)}
					</Center>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
}

export default CartPopover;
