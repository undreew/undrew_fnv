import React from 'react';
import {Box, Text} from '@chakra-ui/react';

import {first} from 'lodash';
import PropTypes from 'prop-types';

import {ColorList} from 'components/Color';

DetailProduct.propTypes = {
	data: PropTypes.object.isRequired,
};

function DetailProduct(props) {
	const {data} = props;
	const {name, full_description: description, variants} = data || {};
	const {colors} = first(variants) || {};

	return (
		<Box>
			<Text textStyle='h3'>{name}</Text>

			<Text textStyle='bodyLg' mt={2}>
				{description}
			</Text>

			<ColorList mt={2} title='Colors' colors={colors} />
		</Box>
	);
}

export default DetailProduct;
