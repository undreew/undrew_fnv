import React from 'react';
import {Box, Button, useMediaQuery} from '@chakra-ui/react';

import {filter, includes, keys, omitBy, some} from 'lodash';
import useQuery from 'hooks/useQuery';

import {
	SORT_BY_SIZE,
	SORT_BY_ITEMS,
	SORT_BY_PRICE,
	SORT_BY_FABRIC,
	SORT_BY_COLLECTION,
} from 'constants/filters';
import {PRODUCT_CATEGORIES} from 'constants/products';

import {FilterList, FilterMobile} from 'components/Filter';
import {AccordionFilterBase} from 'components/Filter/AccordionFilter';

const FILTER_KEYS = ['price', 'sort', 'size', 'stock', 'fabric', 'category'];

function Filters() {
	const {query, pushQuery, updateQuery} = useQuery();
	const {price, sort, size, stock, fabric, category} = query || {};

	function handleFilterItem(item, key) {
		updateQuery({[key]: filter(query[key], (i) => i !== item)});
	}

	function handleClear() {
		const filteredQuery = omitBy(query, (value, key) =>
			includes(FILTER_KEYS, key)
		);
		pushQuery(filteredQuery);
	}

	const hasFilters = some(keys(query), (key) => includes(FILTER_KEYS, key));

	return (
		<Box position='sticky' top={3}>
			{hasFilters && (
				<Box mb={2}>
					<FilterList
						p={2}
						mb={2}
						data={query}
						filterKeys={FILTER_KEYS}
						onChange={handleFilterItem}
					/>

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
				mb={2}
				name='fabric'
				title='Fabric'
				source={SORT_BY_FABRIC}
				defaultValue={fabric}
			/>

			<AccordionFilterBase
				name='category'
				title='Category'
				defaultValue={category}
				source={PRODUCT_CATEGORIES}
			/>
		</Box>
	);
}

function ListFilters() {
	const [isSmallerThanMd] = useMediaQuery('(max-width: 48em)');

	return (
		<>
			{isSmallerThanMd ? (
				<FilterMobile>
					<Filters />
				</FilterMobile>
			) : (
				<Filters />
			)}
		</>
	);
}

export default ListFilters;
