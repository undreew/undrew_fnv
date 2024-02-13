import React from 'react';
import {Link} from 'react-router-dom';

import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';

DashboardBreadcrumb.defaultProps = {
	item: [
		{
			to: '/',
			label: 'Home',
		},
		{
			to: '/dashboard',
			label: 'Shop All',
		},
	],
};

function DashboardBreadcrumb(props) {
	const {item} = props;

	return (
		<Breadcrumb>
			{(item || []).map((item, index) => {
				const {to, label} = item || {};

				return (
					<BreadcrumbItem key={index}>
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
