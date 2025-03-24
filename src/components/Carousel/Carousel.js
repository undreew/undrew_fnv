import React from 'react';
import {Swiper} from 'swiper/react';

import PropTypes from 'prop-types';
import {Autoplay, Pagination} from 'swiper/modules';

Carousel.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Carousel.defaultProps = {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 3,
	pagination: {clickable: true},
	modules: [Pagination, Autoplay],
	style: {paddingBottom: '3rem', cursor: 'pointer'},
	autoplay: {delay: 2700, disabledOnInteraction: false},
};

function Carousel(props) {
	const {children} = props;
	return <Swiper {...props}>{children}</Swiper>;
}

export default Carousel;
