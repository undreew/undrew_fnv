import React from 'react';
import {FaSearch, FaTimes} from 'react-icons/fa';

import {Box, Container, useDisclosure} from '@chakra-ui/react';
import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react';

import {ButtonIcon} from 'components/Buttons';

import PageHeaderHoverMenu from './PageHeaderHoverMenu';
import {DEFAULT_CONTAINER_BREAKPOINTS} from 'constants/breakpoints';

function PageHeaderSearch() {
	const {isOpen, onToggle} = useDisclosure();

	return (
		<Box>
			<ButtonIcon
				label='Search'
				onClick={onToggle}
				icon={isOpen ? <FaTimes /> : <FaSearch />}
			/>

			<PageHeaderHoverMenu
				height={100}
				zIndex={1400}
				isOpen={isOpen}
				handleBackdrop={onToggle}
			>
				<Container maxWidth={DEFAULT_CONTAINER_BREAKPOINTS} pt={5} pb={10}>
					<InputGroup>
						<InputLeftElement pointerEvents='none' color='neutral.grayADADAD'>
							<FaSearch />
						</InputLeftElement>
						<Input type='text' placeholder='Search' variant='modimaFlush' />
					</InputGroup>
				</Container>
			</PageHeaderHoverMenu>
		</Box>
	);
}

export default PageHeaderSearch;
