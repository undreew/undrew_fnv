import React from 'react';

import {
	DashboardBreadcrumb,
	DashboardContent,
	DashboardHeader,
	DashboardList,
} from 'components/Dashboard';
import DashboardFilters from './DashboardFilters';

const data = ['first item'];

function Dashboard() {
	return (
		<div>
			<DashboardBreadcrumb />
			<DashboardHeader title='Shop All' />

			<DashboardContent itemList>
				<DashboardFilters />

				<DashboardList>
					{(data || []).map((item, index) => {
						return <div key={index}>{item}</div>;
					})}
				</DashboardList>
			</DashboardContent>
		</div>
	);
}

export default Dashboard;
