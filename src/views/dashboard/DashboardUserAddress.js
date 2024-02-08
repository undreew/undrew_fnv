import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import React, {createRef, useState} from 'react';
import {formSerialize, formValidate} from 'utils/forms';

function DashboardUserAddress() {
	const {isOpen, onOpen, onClose} = useDisclosure();

	const [address, setAddress] = useState([]);

	const refForm = createRef();

	function handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		const form = refForm.current;

		if (formValidate(form)) {
			const formData = formSerialize(form);
			setAddress((prev) => [...prev, formData]);
		}
		onClose();
	}

	return (
		<Box>
			<Box mb={3}>
				{(address || []).map((item, index) => {
					const {address} = item || {};
					return (
						<div key={index}>
							<input
								type='hidden'
								key={address}
								name={`address`}
								value={address || ''}
							/>
							{address}
						</div>
					);
				})}
			</Box>

			<Button onClick={onOpen}>Add an address</Button>

			<Modal isOpen={isOpen} onClose={onClose} size='lg'>
				<ModalOverlay />
				<ModalContent as='form' onSubmit={handleSubmit} ref={refForm}>
					<ModalHeader>Modal Title</ModalHeader>

					<ModalBody>
						<Box>
							<FormControl isRequired>
								<Input name='address' placeholder='Address' />
								<FormErrorMessage></FormErrorMessage>
							</FormControl>
						</Box>
					</ModalBody>

					<ModalFooter>
						<Button type='submit'>Confirm</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}

export default DashboardUserAddress;
