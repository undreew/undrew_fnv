import React from 'react';
import {useBreakpointValue} from '@chakra-ui/react';
import {HStack, SimpleGrid, Skeleton} from '@chakra-ui/react';

import useGetBestSellers from './useGetBestSellers';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';

import urlJoin from 'url-join';
import {first, times} from 'lodash';
import {IMAGE_URL} from 'constants/configs';

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
			<Swiper
				loop={true}
				spaceBetween={20}
				slidesPerView={slidesPerView}
				pagination={{clickable: true}}
				modules={[Pagination, Autoplay]}
				style={{paddingBottom: '3rem', cursor: 'pointer'}}
				autoplay={{delay: 2700, disableOnInteraction: false}}
			>
				{data.map((item, index) => {
					const {_id, images, ...rest} = item || {};
					const {public_id} = first(images) || {};
					const imageSrc = urlJoin(IMAGE_URL, public_id || '');

					return (
						<SwiperSlide>
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
			</Swiper>
		</HStack>
	);
}

export default LandingBestSellers;
