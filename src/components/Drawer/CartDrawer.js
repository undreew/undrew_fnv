import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	IconButton,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import {FaShoppingBag} from 'react-icons/fa';

function CartDrawer() {
	const {isOpen, onOpen, onClose} = useDisclosure();

	return (
		<>
			<IconButton variant='ghost' aria-label='Add to Cart' onClick={onOpen}>
				<FaShoppingBag />
			</IconButton>

			<Drawer placement='right' size='md' onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader textAlign='center'>
						<Text textStyle='h5'>Your Cart</Text>
					</DrawerHeader>
					<DrawerBody>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default CartDrawer;
