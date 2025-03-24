import React from 'react';
import {SwiperSlide} from 'swiper/react';
import {Box, useBreakpointValue} from '@chakra-ui/react';

import {Carousel} from 'components/Carousel';
import {ProductCard} from 'components/Product';

import monday from '../../assets/images/modiweek/1.webp';
import tuesday from '../../assets/images/modiweek/2.webp';
import wednesday from '../../assets/images/modiweek/3.webp';
import thursday from '../../assets/images/modiweek/4.webp';
import friday from '../../assets/images/modiweek/5.webp';
import saturday from '../../assets/images/modiweek/6.webp';
import sunday from '../../assets/images/modiweek/7.webp';

const MODIWEEK_ITEMS = [
	{
		imageSrc: monday,
		imageWeek: 'Monday',
	},
	{
		imageSrc: tuesday,
		imageWeek: 'Tuesday',
	},
	{
		imageSrc: wednesday,
		imageWeek: 'Wednesday',
	},
	{
		imageSrc: thursday,
		imageWeek: 'Thursday',
	},
	{
		imageSrc: friday,
		imageWeek: 'Friday',
	},
	{
		imageSrc: saturday,
		imageWeek: 'Saturday',
	},
	{
		imageSrc: sunday,
		imageWeek: 'Sunday',
	},
];

function LandingModiweek() {
	const slidesPerView = useBreakpointValue({base: 1, sm: 2, md: 3, lg: 4});

	return (
		<Box>
			<Carousel slidesPerView={slidesPerView}>
				{MODIWEEK_ITEMS.map((item, index) => {
					const {imageSrc, imageWeek} = item;
					return (
						<SwiperSlide key={index}>
							<ProductCard
								image={imageSrc}
								name={imageWeek}
								in_wishlist={null}
							/>
						</SwiperSlide>
					);
				})}
			</Carousel>
		</Box>
	);
}

export default LandingModiweek;
