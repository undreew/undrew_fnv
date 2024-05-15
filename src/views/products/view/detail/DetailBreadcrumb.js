import React from 'react';

import {DashboardBreadcrumb} from 'components/Dashboard';

import {startCase} from 'lodash';
import useQuery from 'hooks/useQuery';

import PropTypes from 'prop-types';

DetailBreadcrumb.propTypes = {
	data: PropTypes.object.isRequired,
};

function DetailBreadcrumb(props) {
	const {data} = props;
	const {name, _id} = data || {};

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
			to: `/products/${_id}`,
			label: name || '',
		},
	].filter((v) => v);

	return <DashboardBreadcrumb items={items} />;
}

export default DetailBreadcrumb;
