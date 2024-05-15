import React from 'react';
import {FaFilter} from 'react-icons/fa';

import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Text,
	Button,
	useDisclosure,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

FilterMobile.defaultProps = {
	headerText: 'Filters',
	triggerText: 'Filters',
};

FilterMobile.propTypes = {
	headerText: PropTypes.string,
	triggerText: PropTypes.string,
};

function FilterMobile(props) {
	const {children, headerText, triggerText} = props;
	const {isOpen, onOpen, onClose} = useDisclosure();

	return (
		<>
			<Button
				w='100%'
				onClick={onOpen}
				variant='modimaOutline'
				leftIcon={<FaFilter />}
			>
				{triggerText}
			</Button>

			<Drawer placement='left' size='full' isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />

				<DrawerContent>
					<DrawerCloseButton />

					<DrawerHeader>
						<Text textStyle='h4'>{headerText}</Text>
					</DrawerHeader>

					<DrawerBody>{children}</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default FilterMobile;
