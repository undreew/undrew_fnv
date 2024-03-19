import React, {useEffect, useState} from 'react';
import {Grid, GridItem, Image} from '@chakra-ui/react';

import {drop, first} from 'lodash';
import urlJoin from 'url-join';
import PropTypes from 'prop-types';

import {IMAGE_URL} from 'constants/configs';

ProductImagesGallery.propTypes = {
	data: PropTypes.object.isRequired,
};

function ProductImagesGallery(props) {
	const {data} = props;
	const {images} = data || {};

	const {public_id} = first(images) || {};
	const otherImages = drop(images) || [];

	const imageSrc = urlJoin(IMAGE_URL, public_id || '');

	const [activeImage, setActiveImage] = useState('');
	const handleActiveImage = (img) => setActiveImage(img);

	useEffect(() => {
		setActiveImage(imageSrc);
	}, [imageSrc]);

	return (
		<Grid templateColumns={`repeat(4, 1fr )`} gap={4}>
			<GridItem colSpan={1} overflow='scroll' maxH={350}>
				{(otherImages || []).map((image, index) => {
					const {public_id} = image || {};

					const imageSrc = urlJoin(IMAGE_URL, public_id || '');

					return (
						<Image
							src={imageSrc}
							key={index}
							mt={1}
							onClick={() => handleActiveImage(imageSrc)}
						/>
					);
				})}
			</GridItem>

			<GridItem colSpan={3}>
				<Image src={activeImage} />
			</GridItem>
		</Grid>
	);
}

export default ProductImagesGallery;
