import React from 'react';
import {Link} from 'react-router-dom';

import {Box, Image, Text} from '@chakra-ui/react';
import {Container, SimpleGrid, VStack} from '@chakra-ui/react';

import {map} from 'lodash';
import urlJoin from 'url-join';

import PageHeaderHoverMenu from './PageHeaderHoverMenu';
import {DEFAULT_CONTAINER_BREAKPOINTS} from 'constants/breakpoints';

function PageHeaderDesktopHoverMenu({data = {}, onToggle, ...rest}) {
	const {sub_categories, images} = data;

	const imagesLength = images?.length;
	const categoriesLength = sub_categories?.length;

	return (
		<PageHeaderHoverMenu {...rest}>
			<Container maxWidth={DEFAULT_CONTAINER_BREAKPOINTS}>
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
												onClick={onToggle}
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
		</PageHeaderHoverMenu>
	);
}

export default PageHeaderDesktopHoverMenu;
