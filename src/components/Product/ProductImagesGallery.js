import React from 'react';
import {Box, useMediaQuery} from '@chakra-ui/react';
import ReactImageGallery from 'react-image-gallery';

import urlJoin from 'url-join';
import PropTypes from 'prop-types';

import {IMAGE_URL} from 'constants/configs';

ProductImagesGallery.propTypes = {
	data: PropTypes.object.isRequired,
};

function ProductImagesGallery(props) {
	const {data} = props;
	const {images} = data || {};

	const [isSmallerThanMd] = useMediaQuery('(max-width: 48em)');
	const thumbnailPosition = isSmallerThanMd ? 'bottom' : 'left';

	function parseImages(data) {
		return (data || []).map((item, index) => {
			const {public_id} = item || {};
			const imageSrc = urlJoin(IMAGE_URL, public_id || '');

			return {
				original: imageSrc,
				thumbnail: imageSrc,
			};
		});
	}

	return (
		<Box>
			<ReactImageGallery
				showNav
				disableThumbnailSwipe
				showPlayButton={false}
				disableThumbnailScroll
				showFullscreenButton={false}
				items={parseImages(images)}
				showBullets={isSmallerThanMd}
				showThumbnails={!isSmallerThanMd}
				thumbnailPosition={thumbnailPosition}
			/>
		</Box>
	);
}

export default ProductImagesGallery;
