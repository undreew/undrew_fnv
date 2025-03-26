import React from 'react';
import {Link} from 'react-router-dom';
import {FaRegUser, FaDashcube} from 'react-icons/fa';
import {Divider, HStack, IconButton} from '@chakra-ui/react';

import {LinkLogo} from 'components/Links';
import {CartPopover} from 'components/Popover';

import PageHeaderDesktopMenu from './PageHeaderDesktopMenu';
import PageHeaderDesktopLinks from './PageHeaderDesktopLinks';

function PageHeaderDesktop(props) {
	const {isAuth} = props;

	return (
		<>
			<LinkLogo />

			<PageHeaderDesktopLinks />

			<HStack gap={5}>
				{!isAuth && (
					<>
						<IconButton
							as={Link}
							to='/login'
							variant='ghost'
							aria-label='Login'
						>
							<FaRegUser />
						</IconButton>
					</>
				)}

				{isAuth && (
					<>
						<IconButton
							as={Link}
							to='/products'
							variant='ghost'
							aria-label='Dashboard'
						>
							<FaDashcube />
						</IconButton>

						<CartPopover />

						<Divider
							orientation='vertical'
							colorScheme='green'
							size='lg'
							h='20px'
						/>
					</>
				)}

				{isAuth && <PageHeaderDesktopMenu isAuth={isAuth} />}
			</HStack>
		</>
	);
}

export default PageHeaderDesktop;
