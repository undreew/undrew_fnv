import {Badge, Box} from '@chakra-ui/react';
import {FILTERS} from 'constants/filters';
import React, {useEffect, useState} from 'react';

function FilterList(props) {
	const {data, ...rest} = props;

	const [filters, setFilters] = useState([]);

	useEffect(() => {
		if (data) {
			let queries = [];
			for (const key in data) {
				const value = data[key];
				value.forEach((val) => {
					queries.push(FILTERS[val]); // FILTERS may become reusable
				});
			}
			setFilters(queries);
		}
	}, [data]);

	return (
		<Box border='1px solid' borderColor='base.primary' {...rest}>
			{filters.map((item, index) => {
				return (
					<Badge ml={2} bgColor='primary.50' color='neutral.black' key={index}>
						{item}
					</Badge>
				);
			})}
		</Box>
	);
}

export default FilterList;
