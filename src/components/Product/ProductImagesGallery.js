import React from 'react';
import {Grid, GridItem, Image} from '@chakra-ui/react';

import {first} from 'lodash';
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

	const imageSrc = urlJoin(IMAGE_URL, public_id || '');

	const testItems = [imageSrc, imageSrc, imageSrc, imageSrc, imageSrc];

	return (
		<Grid templateColumns={`repeat(4, 1fr)`} sx={{my: 5}} gap={4}>
			<GridItem colSpan={1} overflow='scroll' maxH={350}>
				{testItems.map((item, index) => {
					return <Image src={item} key={index} mt={1} />;
				})}
			</GridItem>

			<GridItem colSpan={3}>
				<Image src={imageSrc} />
			</GridItem>
		</Grid>
	);
}

export default ProductImagesGallery;
