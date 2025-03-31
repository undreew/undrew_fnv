import React from 'react';
import {Box, SimpleGrid} from '@chakra-ui/react';
import {Skeleton, SkeletonCircle, SkeletonText} from '@chakra-ui/react';

import {times} from 'lodash';
import PropTypes from 'prop-types';

DashboardListContent.propTypes = {
	isLoading: PropTypes.bool,
};

DashboardListContent.defaultProps = {
	spacing: 5,
	col: {base: 1, sm: 2, md: 2, lg: 2},
};

const DEFAULT_DATA_LENGTH = 2;

function DashboardListContent(props) {
	const {col, spacing, children, isLoading, ...rest} = props;

	return (
		<SimpleGrid columns={col} spacing={spacing} {...rest}>
			{isLoading ? (
				<>
					{times(DEFAULT_DATA_LENGTH, (index) => {
						return (
							<Box
								key={index}
								padding={6}
								boxShadow='lg'
								bg='white'
								height='fit-content'
							>
								<Skeleton height={350} />
								<SkeletonText
									mt={3}
									spacing={3}
									noOfLines={2}
									skeletonHeight={3}
								/>
								<SkeletonCircle mt={3} size={5} />
							</Box>
						);
					})}
				</>
			) : (
				children
			)}
		</SimpleGrid>
	);
}

export default DashboardListContent;
