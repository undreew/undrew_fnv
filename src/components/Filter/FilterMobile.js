import React from 'react';
import {FaFilter} from 'react-icons/fa';

import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from '@chakra-ui/react';

function FilterMobile(props) {
	const {children} = props;
	const {isOpen, onOpen, onClose} = useDisclosure();

	return (
		<>
			<Button
				w='100%'
				onClick={onOpen}
				variant='modimaOutline'
				leftIcon={<FaFilter />}
			>
				Filters
			</Button>

			<Drawer placement='top' size='full' isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />

				<DrawerContent>
					<DrawerCloseButton />

					<DrawerHeader>Filters</DrawerHeader>
					<DrawerBody>{children}</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default FilterMobile;
