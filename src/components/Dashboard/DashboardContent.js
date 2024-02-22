import React from 'react';
import {Grid, GridItem} from '@chakra-ui/react';

import {first, last} from 'lodash';

function DashboardContent(props) {
	const {itemList, children} = props;

	return (
		<Grid
			templateColumns={`repeat(${itemList ? 3 : 4}, 1fr)`}
			sx={{my: 5}}
			gap={4}
		>
			<GridItem colSpan={itemList ? 1 : 2}>{first(children)}</GridItem>
			<GridItem colSpan={2}>{last(children)}</GridItem>
		</Grid>
	);
}

export default DashboardContent;
