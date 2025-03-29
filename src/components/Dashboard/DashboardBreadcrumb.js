import React from 'react';
import {Link} from 'react-router-dom';

import {Text} from '@chakra-ui/react';
import {Breadcrumb, BreadcrumbItem} from '@chakra-ui/react';

import PropTypes from 'prop-types';

DashboardBreadcrumb.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			isActive: PropTypes.bool,
			label: PropTypes.string.isRequired,
			to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		})
	),
};

function DashboardBreadcrumb(props) {
	const {items} = props;

	return (
		<Breadcrumb>
			{(items || []).map((item, index) => {
				const {to, label, isActive} = item || {};

				return (
					<BreadcrumbItem key={index} isCurrentPage={isActive}>
						<Text
							textStyle={!!to ? 'link' : 'bodyLg'}
							as={!!to ? Link : Text}
							to={!!to ? to : '#'}
						>
							{label}
						</Text>
					</BreadcrumbItem>
				);
			})}
		</Breadcrumb>
	);
}

export default DashboardBreadcrumb;
