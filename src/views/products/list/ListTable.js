import {DashboardList} from 'components/Dashboard';
import React from 'react';

function ListTable(props) {
	const {isLoading, data} = props;

	return (
		<div>
			<DashboardList>{data || []}</DashboardList>
		</div>
	);
}

export default ListTable;
