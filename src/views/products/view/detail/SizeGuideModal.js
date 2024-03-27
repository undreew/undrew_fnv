import React from 'react';

import {
	Modal,
	ModalBody,
	ModalHeader,
	ModalContent,
	ModalOverlay,
	ModalCloseButton,
} from '@chakra-ui/react';

function SizeGuideModal(props) {
	const {isOpen, onToggle} = props;

	return (
		<Modal isOpen={isOpen} onClose={onToggle} size='lg'>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Size Guide</ModalHeader>
				<ModalCloseButton />

				<ModalBody pb={6}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						mollitia, officiis minima sequi voluptate ab, facere, iste animi
						doloremque fugiat hic. Beatae error voluptatibus architecto est
						saepe qui ducimus expedita cum facere praesentium asperiores quis
						quos quam accusantium autem sed in reprehenderit ratione obcaecati,
						eaque cupiditate ipsam nisi deserunt! Saepe, ipsum? Tenetur esse
						perspiciatis excepturi saepe alias! A fuga quibusdam nam corrupti
						eveniet, eos totam error ea enim eum quae, numquam alias? Animi quam
						deleniti natus consequuntur deserunt quod exercitationem,
						consequatur nulla laudantium eveniet. Aperiam culpa deleniti omnis
						labore magni, eaque sequi corrupti, inventore eum provident veniam
						quos cumque eligendi!
					</p>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}

export default SizeGuideModal;
