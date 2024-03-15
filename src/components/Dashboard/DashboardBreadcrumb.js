import React from 'react';
import {Link} from 'react-router-dom';

import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';

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
						<BreadcrumbLink as={Link} to={to}>
							{label}
						</BreadcrumbLink>
					</BreadcrumbItem>
				);
			})}
		</Breadcrumb>
	);
}

export default DashboardBreadcrumb;
