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
	const {name} = data || {};

	const {query} = useQuery();
	const {category} = query || {};

	const items = [
		{
			to: '/',
			label: 'Home',
		},
		// temp
		category && {
			to: '/',
			label: startCase(category),
		},
		{
			to: '/',
			label: name || '',
		},
	].filter((v) => v);

	return <DashboardBreadcrumb items={items} />;
}

export default DetailBreadcrumb;
