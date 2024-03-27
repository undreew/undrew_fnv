import React from 'react';
import {Box} from '@chakra-ui/react';
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
				showThumbnails
				disableThumbnailScroll
				disableThumbnailSwipe
				showPlayButton={false}
				thumbnailPosition='left'
				showFullscreenButton={false}
				items={parseImages(images)}
			/>
		</Box>
	);
}

export default ProductImagesGallery;
