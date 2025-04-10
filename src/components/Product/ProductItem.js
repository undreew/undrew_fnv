import React from 'react';
import {FaMinus, FaPlus} from 'react-icons/fa';

import {CloseIcon} from '@chakra-ui/icons';
import {Box, HStack, Image, Stack, Text, VStack} from '@chakra-ui/react';

import {startCase} from 'lodash';
import PropTypes from 'prop-types';
import {getFormattedPrice} from 'utils/numbers';
import {PRODUCT_CURRENCY} from 'constants/products';

import {ButtonIcon} from 'components/Buttons';

ProductItem.propTypes = {
	total: PropTypes.number,
	count: PropTypes.number,
	product: PropTypes.object,
	actions: PropTypes.object,
	isDisabled: PropTypes.bool,
};

function ProductItem(props) {
	const {count, total} = props;
	const {product, isDisabled, actions} = props;
	const {onRemove, onIncrease, onDecrease} = actions;
	const {image, name, size, color, description} = product;

	return (
		<Stack w='100%' gap={5} flexDir={{base: 'row', sm: 'row'}}>
			<Image
				src={image}
				w={{base: 100, sm: 150}}
				objectFit='cover'
				alt={description}
			/>

			<Box flexGrow={1} alignSelf='stretch' mr={5}>
				<VStack height='100%'>
					<HStack justifyContent='space-between' w='100%'>
						<Text textStyle='h6'>{name}</Text>
						<ButtonIcon
							size='xs'
							variant='ghost'
							onClick={onRemove}
							icon={<CloseIcon />}
							isDisabled={isDisabled}
						/>
					</HStack>

					<Text textStyle='bodyMd' w='100%'>
						Size: {startCase(size)}
					</Text>
					<Text textStyle='bodyMd' w='100%'>
						Color: {startCase(color)}
					</Text>

					<HStack
						sx={{
							w: '100%',
							flexGrow: 1,
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						<HStack bgColor='primary.50'>
							<ButtonIcon
								width={5}
								height={5}
								icon={<FaMinus />}
								onClick={onDecrease}
								isDisabled={count === 0 || isDisabled}
							/>
							<Text textStyle='bodyMd'>{count}</Text>
							<ButtonIcon
								width={5}
								height={5}
								icon={<FaPlus />}
								onClick={onIncrease}
								isDisabled={isDisabled}
							/>
						</HStack>

						<Text textStyle='h6'>
							{getFormattedPrice(total, 'php', PRODUCT_CURRENCY, '0,0.00')}
						</Text>
					</HStack>
				</VStack>
			</Box>
		</Stack>
	);
}

export default ProductItem;
