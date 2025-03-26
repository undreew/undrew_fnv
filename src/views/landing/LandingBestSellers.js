import React from 'react';
import {SwiperSlide} from 'swiper/react';
import {useBreakpointValue} from '@chakra-ui/react';
import {HStack, SimpleGrid, Skeleton} from '@chakra-ui/react';

import useGetBestSellers from './useGetBestSellers';

import urlJoin from 'url-join';
import {first, times} from 'lodash';
import {IMAGE_URL} from 'constants/configs';

import {Carousel} from 'components/Carousel';
import {ProductCard} from 'components/Product';

function LandingBestSellers() {
	const {isLoading, data} = useGetBestSellers();
	const slidesPerView = useBreakpointValue({base: 1, sm: 2, md: 2, lg: 3});

	if (isLoading) {
		return (
			<SimpleGrid columns={{base: 1, md: 2, xl: 3}} spacing={6}>
				{times(slidesPerView, (index) => (
					<Skeleton key={index} height='500px' />
				))}
			</SimpleGrid>
		);
	}

	return (
		<HStack>
			<Carousel slidesPerView={slidesPerView}>
				{data.map((item, index) => {
					const {_id, images, ...rest} = item || {};
					const {public_id} = first(images) || {};
					const imageSrc = urlJoin(IMAGE_URL, public_id || '');

					return (
						<SwiperSlide key={index}>
							<ProductCard
								id={_id}
								key={index}
								image={imageSrc}
								wishlistAction={null}
								{...rest}
							/>
						</SwiperSlide>
					);
				})}
			</Carousel>
		</HStack>
	);
}

export default LandingBestSellers;
