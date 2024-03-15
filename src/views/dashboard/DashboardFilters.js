import React from 'react';
import {Box, Button, useMediaQuery} from '@chakra-ui/react';

import {isEmpty} from 'lodash';
import useQuery from 'hooks/useQuery';

import {
	SORT_BY_SIZE,
	SORT_BY_ITEMS,
	SORT_BY_PRICE,
	SORT_BY_FABRIC,
	SORT_BY_COLLECTION,
} from 'constants/filters';

import {FilterList} from 'components/Filter';
import {AccordionFilterBase} from 'components/Filter/AccordionFilter';
import DashboardFiltersMobile from './DashboardFiltersMobile';

function DashboardListFilters() {
	const {query, pushQuery} = useQuery();
	const {price, sort, size, stock, fabric} = query || {};

	function handleClear() {
		pushQuery({});
	}

	return (
		<Box position='sticky' top={3}>
			{!isEmpty(query) && (
				<Box mb={2}>
					<FilterList p={2} mb={2} data={query} />

					<Button variant='modimaOutline' onClick={handleClear}>
						Clear All Filters
					</Button>
				</Box>
			)}

			<AccordionFilterBase
				mb={2}
				name='sort'
				title='Sort By'
				source={SORT_BY_ITEMS}
				defaultValue={sort}
			/>

			<AccordionFilterBase
				mb={2}
				name='price'
				title='Price'
				source={SORT_BY_PRICE}
				defaultValue={price}
				isSingle
			/>

			<AccordionFilterBase
				mb={2}
				name='size'
				title='Size'
				source={SORT_BY_SIZE}
				defaultValue={size}
			/>

			<AccordionFilterBase
				mb={2}
				name='stock'
				title='Collection'
				source={SORT_BY_COLLECTION}
				defaultValue={stock}
				isSingle
			/>

			<AccordionFilterBase
				name='fabric'
				title='Fabric'
				source={SORT_BY_FABRIC}
				defaultValue={fabric}
			/>
		</Box>
	);
}

function DashboardFilters() {
	const [isSmallerThanMd] = useMediaQuery('(max-width: 48em)');

	return (
		<>
			{isSmallerThanMd ? (
				<DashboardFiltersMobile>
					<DashboardListFilters />
				</DashboardFiltersMobile>
			) : (
				<DashboardListFilters />
			)}
		</>
	);
}

export default DashboardFilters;
