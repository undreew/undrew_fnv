import {
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	PopoverCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import {FaShoppingBag} from 'react-icons/fa';
import {Center, IconButton, Text} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import {noop} from 'lodash';

CartPopover.defaultProps = {
	header: 'Your shopping cart is empty',
	body: 'Discover Modimal and add products to your Bag',
	action: noop,
};

CartPopover.propTypes = {
	header: PropTypes.string,
	body: PropTypes.string,
	action: PropTypes.func,
};

function CartPopover({header, body, action}) {
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
						<Text textStyle='h6'>{header}</Text>
						<Text textStyle='bodySm'>{body}</Text>
					</Center>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
}

export default CartPopover;
