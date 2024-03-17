import React, {useEffect, useState} from 'react';
import {HStack, Tag, TagCloseButton, TagLabel} from '@chakra-ui/react';

import {upperCase} from 'lodash';
import {FILTERS} from 'constants/filters';

function FilterList(props) {
	const {data, onChange, ...rest} = props;

	const [filters, setFilters] = useState([]);

	useEffect(() => {
		if (data) {
			let queries = [];
			for (const key in data) {
				const value = data[key];
				value.forEach((val) => {
					queries.push({
						value: val,
						queryKey: key,
						label: FILTERS[val],
					}); // FILTERS may become reusable
				});
			}
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
