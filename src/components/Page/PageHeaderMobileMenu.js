import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FaBars, FaSignOutAlt, FaUser} from 'react-icons/fa';

import {
	Accordion,
	AccordionItem,
	AccordionIcon,
	AccordionPanel,
	AccordionButton,
} from '@chakra-ui/react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerContent,
} from '@chakra-ui/react';
import {useDisclosure} from '@chakra-ui/react';
import {HStack, Button, Text, VStack} from '@chakra-ui/react';

import {ButtonIcon} from 'components/Buttons';

import urlJoin from 'url-join';
import {first, get, keys, map} from 'lodash';
import {NAV_SUBLINKS, NAVS, NAVS_LABEL} from 'constants/nav';

function PageHeaderMobileMenu(props) {
	const {isAuth} = props;

	const {pathname} = useLocation();
	const {isOpen, onOpen, onClose} = useDisclosure();

	useEffect(() => {
		if (pathname) onClose();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<>
			<ButtonIcon icon={<FaBars />} label='Mobile Menu' onClick={onOpen} />

			<Drawer size='full' placement='left' isOpen={isOpen} onClose={onClose}>
				<DrawerContent mt={95} sx={{height: 'calc(100vh - 95px)'}}>
					<DrawerBody py={10}>
						{map(keys(NAVS), (item, index) => {
							const mainLink = NAVS_LABEL[item];
							const sublinks = NAV_SUBLINKS[NAVS[item]];

							const items = get(
								first(get(sublinks, 'sub_categories')),
								'items'
							);

							return (
								<Accordion key={index} variant='mobileLink' allowToggle>
									<AccordionItem>
										<AccordionButton
											display='flex'
											justifyContent='space-between'
										>
											{mainLink}
											<AccordionIcon />
										</AccordionButton>

										<AccordionPanel px={10} py={5}>
											<VStack gap={5} alignItems='flex-start'>
												{map(items, ({label, to}, index) => {
													return (
														<Text
															as={Link}
															key={index}
															textStyle='bodySm'
															fontFamily='heading'
															to={urlJoin('/products', to)}
														>
															{label}
														</Text>
													);
												})}
											</VStack>
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
							);
						})}
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
