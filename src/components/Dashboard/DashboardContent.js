import React from 'react';
import {Grid, GridItem, useMediaQuery} from '@chakra-ui/react';

import {first, last} from 'lodash';
import PropTypes from 'prop-types';

DashboardContent.propTypes = {
	itemList: PropTypes.bool,
};

function DashboardContent(props) {
	const {itemList, children} = props;
	const [isSmallerThanMd] = useMediaQuery('(max-width: 48em)');

	let firstItemSpan = 2;
	let secondItemSpan = 2;
	if (isSmallerThanMd) {
		firstItemSpan = 4;
		secondItemSpan = 4;
	} else {
		if (itemList) {
			firstItemSpan = 1;
			secondItemSpan = 2;
		}
	}

	return (
		<Grid
			templateColumns={`repeat(${itemList ? 3 : 4}, 1fr)`}
			sx={{my: 5}}
			gap={4}
		>
			<GridItem colSpan={firstItemSpan}>{first(children)}</GridItem>
			<GridItem colSpan={secondItemSpan}>{last(children)}</GridItem>
		</Grid>
	);
}

export default DashboardContent;
