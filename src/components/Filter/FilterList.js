import React, {useEffect, useState} from 'react';
import {HStack, Tag, TagCloseButton, TagLabel} from '@chakra-ui/react';

import {FILTERS} from 'constants/filters';
import {flatMap, map, upperCase} from 'lodash';

function FilterList(props) {
	const {data, onChange, ...rest} = props;

	const [filters, setFilters] = useState([]);

	useEffect(() => {
		if (data) {
			const queries = flatMap(data, (value, key) => {
				return map(value, (val) => {
					return {
						value: val,
						queryKey: key,
						label: FILTERS[val], // FILTERS may become dynamic
					};
				});
			});
			setFilters(queries);
		}
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
