import React, {useEffect, useState} from 'react';
import {HStack, Tag, TagCloseButton, TagLabel} from '@chakra-ui/react';

import {FILTERS} from 'constants/filters';
import {filter, flatMap, includes, map, toPairs, upperCase} from 'lodash';

function FilterList(props) {
	const {data, onChange, filterKeys, ...rest} = props;

	const [filters, setFilters] = useState([]);

	useEffect(() => {
		if (data) {
			const filtersToApply = filter(toPairs(data), ([key]) =>
				includes(filterKeys, key)
			);

			const queries = flatMap(filtersToApply, ([key, values]) =>
				map(values, (value) => ({value, queryKey: key, label: FILTERS[value]}))
			).filter(Boolean);
			setFilters(queries);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<HStack
			flexWrap='wrap'
			border='1px solid'
			borderColor='base.primary'
			{...rest}
		>
			{filters.map((item, index) => {
				const {value, label, queryKey} = item || {};

				return (
					<Tag key={index} bgColor='primary.50' borderRadius={0}>
						<TagLabel fontSize='sm' fontWeight='600' color='neutral.black'>
							{upperCase(label)}
						</TagLabel>

						<TagCloseButton onClick={() => onChange(value, queryKey)} />
					</Tag>
				);
			})}
		</HStack>
	);
}

export default FilterList;
