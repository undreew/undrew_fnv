import React from 'react';

import {
	Accordion,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
} from '@chakra-ui/react';
import {Checkbox, CheckboxGroup, VStack} from '@chakra-ui/react';

import useQuery from 'hooks/useQuery';
import {find, keys, filter, includes} from 'lodash';

function AccordionFilterBase(props) {
	const {title, source, name, defaultValue = [], isSingle, ...rest} = props;

	const {updateQuery} = useQuery();

	function onChange(item, isChecked) {
		if (includes(defaultValue, item)) {
			if (isChecked) return false;
			return updateQuery({[name]: filter(defaultValue, (v) => v !== item)});
		}

		if (isSingle) return updateQuery({[name]: [item]});

		updateQuery({[name]: [...defaultValue, item]});
	}

	function getDefaultValue(value) {
		return (value || []).map((item) => ({
			item,
			isChecked: true,
		}));
	}

	const _defaultValue = getDefaultValue(defaultValue);

	return (
		<Accordion variant='filter' allowToggle {...rest}>
			<AccordionItem>
				<AccordionButton display='flex' justifyContent='space-between'>
					{title}

					<AccordionIcon />
				</AccordionButton>

				<AccordionPanel>
					<CheckboxGroup>
						<VStack alignItems='start'>
							{keys(source).map((item, index) => {
								const {isChecked} =
									find(_defaultValue, (v) => v.item === item) || {};

								return (
									<Checkbox
										key={index}
										isChecked={isChecked || false}
										onChange={(e) => {
											e.preventDefault();
											e.stopPropagation();

											const checked = e.target.checked;

											onChange(item, checked);
										}}
										variant='modima'
										textStyle='bodyMd'
									>
										{source[item]}
									</Checkbox>
								);
							})}
						</VStack>
					</CheckboxGroup>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
}

export default AccordionFilterBase;
