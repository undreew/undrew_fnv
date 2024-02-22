import React from 'react';
import {Badge, Box, Button, HStack} from '@chakra-ui/react';

import {isEmpty} from 'lodash';
import useQuery from 'hooks/useQuery';

import {
	SORT_BY_COLLECTION,
	SORT_BY_FABRIC,
	SORT_BY_ITEMS,
	SORT_BY_PRICE,
	SORT_BY_SIZE,
} from 'constants/filters';

import {AccordionFilterBase} from 'components/Filter/AccordionFilter';

function DashboardFilters() {
	const {query, pushQuery} = useQuery();
	const {price, sort, size, stock, fabric} = query || {};

	function handleClear() {
		pushQuery({});
	}

	return (
		<Box position='sticky' top={0} py={3}>
			{!isEmpty(query) && (
				<Box mb={2}>
					<Box border='1px solid' borderColor='base.primary' p={2} mb={2}>
						{([sort, price, size, stock, fabric] || []).map((items) => {
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

export default DashboardFilters;
