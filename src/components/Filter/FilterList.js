import {Badge, HStack, IconButton} from '@chakra-ui/react';
import {FILTERS} from 'constants/filters';
import React, {useEffect, useState} from 'react';
import {FaTimes} from 'react-icons/fa';

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
					<Badge
						pl={2}
						fontSize='sm'
						bgColor='primary.50'
						color='neutral.black'
						key={index}
					>
						{label}

						<IconButton
							size='xs'
							cursor='pointer'
							variant='ghost'
							_hover={{bg: 'transparent'}}
							onClick={() => onChange(value, queryKey)}
						>
							<FaTimes size={10} />
						</IconButton>
					</Badge>
				);
			})}
		</HStack>
	);
}

export default FilterList;
