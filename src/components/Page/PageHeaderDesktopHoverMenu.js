import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import {Box, Image, Text} from '@chakra-ui/react';
import {Container, SimpleGrid, VStack} from '@chakra-ui/react';

import {map} from 'lodash';
import urlJoin from 'url-join';

function PageHeaderDesktopHoverMenuBackdrop({isOpen}) {
	if (!isOpen) return;
	return (
		<Box
			left={0}
			top={540}
			width='100%'
			zIndex={999}
			height='100vh'
			position='absolute'
			backdropFilter='blur(10px)'
			bgColor='rgba(0, 0, 0, 0.4)'
		/>
	);
}

function PageHeaderDesktopHoverMenu({
	data = {},
	isOpen = false,
	onHover = () => {},
}) {
	const {sub_categories, images} = data;

	const imagesLength = images?.length;
	const categoriesLength = sub_categories?.length;

	return (
		<Fragment>
			<PageHeaderDesktopHoverMenuBackdrop isOpen={isOpen} />

			<Box
				onMouseLeave={() => onHover('out')}
				sx={{
					backdropFilter: 'blur(5px)',
					border: 'none',
					display: isOpen ? 'block' : 'none',
					position: 'absolute',
					zIndex: 1000,
					top: 90,
					left: 0,
					width: '100%',
					bgColor: '#fff',
					height: '450px',
				}}
			>
				<Container maxWidth={{sm: '2xl', md: '4xl', lg: '7xl'}}>
					<SimpleGrid columns={2} spacing={2} py={5} h='100%'>
						<SimpleGrid columns={categoriesLength} spacing={5}>
							{map(sub_categories, (category, index) => {
								const {title, items} = category || {};
								return (
									<VStack key={index} alignItems='start' wrap='nowrap'>
										<Text textStyle='bodyMd' fontFamily='heading' mb={2}>
											{title}
										</Text>

										{map(items, ({label, to}, index) => {
											return (
												<Text
													as={Link}
													key={index}
													textStyle='bodySm'
													fontFamily='heading'
													to={urlJoin('/products', to)}
													_hover={{textDecoration: 'underline'}}
												>
													{label}
												</Text>
											);
										})}
									</VStack>
								);
							})}
						</SimpleGrid>

						<SimpleGrid columns={imagesLength} spacing={3}>
							{map(images, (image, index) => {
								return (
									<Box key={index}>
										<Image
											key={index}
											loading='lazy'
											style={{
												height: 350,
												width: 'auto',
												objectFit: 'cover',
											}}
											{...image}
										/>
										<Text textStyle='bodyMd' fontFamily='heading' mt={2}>
											{image?.alt}
										</Text>
									</Box>
								);
							})}
						</SimpleGrid>
					</SimpleGrid>
				</Container>
			</Box>
		</Fragment>
	);
}

export default PageHeaderDesktopHoverMenu;
