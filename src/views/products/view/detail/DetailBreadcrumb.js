import React from 'react';

import {DashboardBreadcrumb} from 'components/Dashboard';

import {startCase} from 'lodash';
import useQuery from 'hooks/useQuery';

import PropTypes from 'prop-types';
import {PageContainer} from 'components/Page';

DetailBreadcrumb.propTypes = {
	data: PropTypes.object.isRequired,
};

function DetailBreadcrumb(props) {
	const {data} = props;
	const {name} = data || {};

	const {query} = useQuery();
	const {category} = query || {};

	const items = [
		{
			to: '/products',
			label: 'Products',
		},
		// temp
		category && {
			to: '/',
			label: startCase(category),
		},
		{
			isActive: true,
			label: name || 'Loading...',
		},
	].filter((v) => v);

	return (
		<PageContainer>
			<DashboardBreadcrumb items={items} />
		</PageContainer>
	);
}

export default DetailBreadcrumb;
