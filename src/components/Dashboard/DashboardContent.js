import React from 'react';
import {Grid, GridItem, useMediaQuery} from '@chakra-ui/react';

import {first, last} from 'lodash';
import PropTypes from 'prop-types';
import {PageContainer} from 'components/Page';

DashboardContent.propTypes = {
	itemList: PropTypes.bool,
};

function DashboardContent(props) {
	const {itemList, children, ...rest} = props;
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
		<PageContainer>
			<Grid
				gap={4}
				sx={{my: 5}}
				templateColumns={`repeat(${itemList ? 3 : 4}, 1fr)`}
				{...rest}
			>
				<GridItem colSpan={firstItemSpan}>{first(children)}</GridItem>
				<GridItem colSpan={secondItemSpan}>{last(children)}</GridItem>
			</Grid>
		</PageContainer>
	);
}

export default DashboardContent;
