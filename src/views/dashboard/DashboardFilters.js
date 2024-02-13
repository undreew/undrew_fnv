import React from 'react';
import {Badge, Box, Button, HStack} from '@chakra-ui/react';

import {isEmpty} from 'lodash';
import useQuery from 'hooks/useQuery';

import {
	SORT_BY_COLLECTION,
	SORT_BY_FABRIC,
	SORT_BY_ITEMS,
	SORT_BY_SIZE,
} from 'constants/filters';

import {AccordionFilterBase} from 'components/Filter/AccordionFilter';

function DashboardFilters() {
	const {query, pushQuery} = useQuery();
	const {sort_by_items, sort_by_size, sort_by_collection, sort_by_fabric} =
		query || {};

	function handleClear() {
		pushQuery({});
	}

	return (
		<Box>
			{!isEmpty(query) && (
				<Box mb={2}>
					<Box border='1px solid' borderColor='base.primary' p={2} mb={2}>
						{(
							[
								sort_by_items,
								sort_by_size,
								sort_by_collection,
								sort_by_fabric,
							] || []
						).map((items) => {
							return (items || []).map((item, index) => {
								return (
									<Badge ml={2} bgColor='primary.50' key={index}>
										{item}
									</Badge>
								);
							});
						})}
					</Box>

					<HStack>
						<Button variant='modimaOutline' onClick={handleClear}>
							Clear All Filters
						</Button>
					</HStack>
				</Box>
			)}

			<AccordionFilterBase
				mb={2}
				name='sort_by_items'
				title='Sort By'
				source={SORT_BY_ITEMS}
				defaultValue={sort_by_items}
			/>

			<AccordionFilterBase
				mb={2}
				name='sort_by_size'
				title='Sort By Size'
				source={SORT_BY_SIZE}
				defaultValue={sort_by_size}
			/>

			<AccordionFilterBase
				mb={2}
				name='sort_by_collection'
				title='Sort By Collection'
				source={SORT_BY_COLLECTION}
				defaultValue={sort_by_collection}
			/>

			<AccordionFilterBase
				name='sort_by_fabric'
				title='Sort By Fabric'
				source={SORT_BY_FABRIC}
				defaultValue={sort_by_fabric}
			/>
		</Box>
	);
}

export default DashboardFilters;
