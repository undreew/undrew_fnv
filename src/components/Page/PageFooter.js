import React from 'react';
import {
	Box,
	Text,
	Input,
	List,
	Button,
	HStack,
	Checkbox,
	ListItem,
	Container,
	InputGroup,
	IconButton,
	SimpleGrid,
	InputRightElement,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {
	FaCopyright,
	FaFacebook,
	FaInstagram,
	FaPersonBooth,
	FaPinterest,
	FaSpotify,
} from 'react-icons/fa';

const about = [
	{label: 'Collection', to: '/products'},
	{label: 'Sustainability', to: '/sustainability'},
	{label: 'Privacy Policy', to: '/privacy-policy'},
	{label: 'Support System', to: '/support'},
	{label: 'Terms & Condition', to: '/terms-conditions'},
	{label: 'Copyright Notice', to: '/copyright'},
];

const help = [
	{label: 'Orders & Shipping', to: '/orders'},
	{label: 'Returns & Refunds', to: '/refunds'},
	{label: 'FAQs', to: '/faqs'},
	{label: 'Contact Us', to: '/contact-us'},
];

const join = [
	{label: 'Modimal Club', to: '/club'},
	{label: 'Careers', to: '/careers'},
	{label: 'Visit Us', to: '/visit-us'},
];

function FooterLinks({title, links}) {
	return (
		<Box>
			<Text textStyle='h5' mb={3}>
				{title}
			</Text>

			<List display='flex' flexDir='column' gap='.5rem'>
				{(links || []).map((item, index) => {
					const {label, to} = item || {};
					return (
						<ListItem key={index} as={Link} to={to}>
							{label}
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
}

function PageFooter() {
	return (
		<Box
			sx={{
				bgColor: 'neutral.gray404040',
				color: 'base.white',
			}}
		>
			<Container
				py={10}
				maxW={{
					sm: '2xl',
					md: '4xl',
					lg: '7xl',
				}}
			>
				<SimpleGrid
					columns={{base: 1, sm: 1, md: 2}}
					gap={{base: 5, sm: 10, md: 20}}
				>
					<Box>
						<Text textStyle='h5' mb={3}>
							Join our club, get 15% off for your Birthday
						</Text>

						<InputGroup>
							<Input
								color='base.white'
								variant='modimaFilled'
								placeholder='Enter Your Email Address'
							/>
							<InputRightElement width='max-content'>
								<Button variant='modimaSolid'>Submit</Button>
							</InputRightElement>
						</InputGroup>

						<Checkbox variant='modima' display='flex' mt={3}>
							<Text textStyle='overlineSm'>
								By Submitting your email, you agree to receive advertising
								emails from Modimal.
							</Text>
						</Checkbox>
					</Box>

					<SimpleGrid columns={{base: 1, sm: 2, md: 2, lg: 3}} gap={5}>
						<FooterLinks title='About Modimal' links={about} />

						<FooterLinks title='Help & Support' links={help} />

						<FooterLinks title='Join Up' links={join} />
					</SimpleGrid>
				</SimpleGrid>

				<SimpleGrid columns={2} mt={5}>
					<HStack gap={5}>
						<Link to='https://www.instagram.com' replace>
							<FaInstagram size={25} style />
						</Link>

						<Link to='https://www.fb.com'>
							<FaFacebook size={25} />
						</Link>

						<Link to='https://www.pinterest.com'>
							<FaPinterest size={25} />
						</Link>

						<Link to='https://www.spotify.com'>
							<FaSpotify size={25} />
						</Link>
					</HStack>

					<Box display='flex' justifyContent='flex-end'>
						<IconButton
							borderRadius={0}
							color='base.white'
							bgColor='primary.600'
							_hover={{color: 'primary.600', bgColor: 'primary.200'}}
						>
							<FaPersonBooth />
						</IconButton>
					</Box>
				</SimpleGrid>

				<HStack alignItems='center' mt={5}>
					<FaCopyright />

					<Text textStyle='captionMd'>2023 modimal. All Rights Reserved.</Text>
				</HStack>
			</Container>
		</Box>
	);
}

export default PageFooter;
