import React, {Fragment} from 'react';
import {Button, useDisclosure} from '@chakra-ui/react';

import SizeGuideModal from './SizeGuideModal';

function SizeGuide() {
	const {isOpen, onToggle} = useDisclosure();

	return (
		<Fragment>
			<Button variant='modimaGhost' alignSelf='end' onClick={onToggle}>
				Size Guide
			</Button>

			<SizeGuideModal isOpen={isOpen} onToggle={onToggle} />
		</Fragment>
	);
}

export default SizeGuide;
