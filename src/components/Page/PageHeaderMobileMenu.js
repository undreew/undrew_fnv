import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {
	Menu,
	MenuList,
	MenuItem,
	IconButton,
	MenuButton,
	DrawerBody,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	DrawerFooter,
	Button,
	VStack,
	AccordionPanel,
	HStack,
} from '@chakra-ui/react';

import {
	Box,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	useDisclosure,
} from '@chakra-ui/react';

import {
	FaBars,
	FaRegUser,
	FaDashcube,
	FaSignOutAlt,
	FaRegAddressBook,
	FaHandHoldingHeart,
	FaRegQuestionCircle,
	FaUser,
} from 'react-icons/fa';
import {ButtonIcon} from 'components/Buttons';

function MobileMenu({items}) {
	return (
		<Menu>
			<MenuButton
				variant='ghost'
				as={IconButton}
				icon={<FaBars />}
				aria-label='Mobile Menu'
			/>
			<MenuList>
				{(items || []).map((item, index) => {
					const {to, icon, label} = item || {};
					return (
						<MenuItem key={index} as={Link} to={to} icon={icon}>
							{label}
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
}

function PageHeaderMobileMenu(props) {
	const {isAuth} = props;

	const {pathname} = useLocation();
	const {isOpen, onOpen, onClose} = useDisclosure();

	useEffect(() => {
		if (pathname) onClose();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const items = [
		isAuth && {
			to: '/products',
			label: 'Dashboard',
			icon: <FaDashcube />,
		},
		!isAuth && {
			to: '/login',
			label: 'Login',
			icon: <FaRegUser />,
		},
		{
			to: '/sustainability',
			label: 'Sustainability',
			icon: <FaHandHoldingHeart />,
		},
		{
			to: '/contact-us',
			label: 'Contact Us',
			icon: <FaRegAddressBook />,
		},
		{
			to: '/faqs',
			label: 'Faqs',
			icon: <FaRegQuestionCircle />,
		},
		isAuth && {
			to: '/logout',
			label: 'Logout',
			icon: <FaSignOutAlt />,
		},
	].filter((v) => v);

	return (
		<>
			<ButtonIcon icon={<FaBars />} label='Mobile Menu' onClick={onOpen} />

			<Drawer size='full' placement='left' isOpen={isOpen} onClose={onClose}>
				<DrawerContent mt={95} sx={{height: 'calc(100vh - 95px)'}}>
					<DrawerBody>
						<Accordion allowToggle>
							<AccordionItem>
								<AccordionButton display='flex' justifyContent='space-between'>
									Item
									<AccordionIcon />
								</AccordionButton>

								<AccordionPanel>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Nemo, suscipit dolore doloribus maxime quasi, deleniti optio
									nulla in qui mollitia sit molestias quos vitae laudantium
									veritatis. Cumque repudiandae iure, aliquid magni iusto autem
									id vel sit ut numquam voluptatibus soluta. Suscipit dolorem,
									praesentium alias non incidunt voluptate iusto quasi eos.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>

						<Accordion allowToggle>
							<AccordionItem>
								<AccordionButton display='flex' justifyContent='space-between'>
									Item
									<AccordionIcon />
								</AccordionButton>

								<AccordionPanel>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Nemo, suscipit dolore doloribus maxime quasi, deleniti optio
									nulla in qui mollitia sit molestias quos vitae laudantium
									veritatis. Cumque repudiandae iure, aliquid magni iusto autem
									id vel sit ut numquam voluptatibus soluta. Suscipit dolorem,
									praesentium alias non incidunt voluptate iusto quasi eos.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>

						<Accordion allowToggle>
							<AccordionItem>
								<AccordionButton display='flex' justifyContent='space-between'>
									Item
									<AccordionIcon />
								</AccordionButton>

								<AccordionPanel>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Nemo, suscipit dolore doloribus maxime quasi, deleniti optio
									nulla in qui mollitia sit molestias quos vitae laudantium
									veritatis. Cumque repudiandae iure, aliquid magni iusto autem
									id vel sit ut numquam voluptatibus soluta. Suscipit dolorem,
									praesentium alias non incidunt voluptate iusto quasi eos.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>

						<Accordion allowToggle>
							<AccordionItem>
								<AccordionButton display='flex' justifyContent='space-between'>
									Item
									<AccordionIcon />
								</AccordionButton>

								<AccordionPanel>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Nemo, suscipit dolore doloribus maxime quasi, deleniti optio
									nulla in qui mollitia sit molestias quos vitae laudantium
									veritatis. Cumque repudiandae iure, aliquid magni iusto autem
									id vel sit ut numquam voluptatibus soluta. Suscipit dolorem,
									praesentium alias non incidunt voluptate iusto quasi eos.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>

						<Accordion allowToggle>
							<AccordionItem>
								<AccordionButton display='flex' justifyContent='space-between'>
									Item
									<AccordionIcon />
								</AccordionButton>

								<AccordionPanel>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Nemo, suscipit dolore doloribus maxime quasi, deleniti optio
									nulla in qui mollitia sit molestias quos vitae laudantium
									veritatis. Cumque repudiandae iure, aliquid magni iusto autem
									id vel sit ut numquam voluptatibus soluta. Suscipit dolorem,
									praesentium alias non incidunt voluptate iusto quasi eos.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</DrawerBody>

					<DrawerFooter as={HStack} justifyContent='center'>
						{!isAuth && (
							<Button
								as={Link}
								to='/login'
								flexGrow={1}
								leftIcon={<FaUser />}
								variant='modimaOutline'
							>
								Login
							</Button>
						)}

						{isAuth && (
							<Button
								as={Link}
								flexGrow={1}
								to='/logout'
								variant='modimaOutline'
								leftIcon={<FaSignOutAlt />}
							>
								Logout
							</Button>
						)}

						{!isAuth && (
							<Button
								variant='modimaOutline'
								as={Link}
								to='/register'
								flexGrow={1}
							>
								Create Account
							</Button>
						)}
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default PageHeaderMobileMenu;
