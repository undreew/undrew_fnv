import {DashboardHeader} from 'components/Dashboard';
import {startCase} from 'lodash';
import React from 'react';

function CategoryHeader({title, count}) {
	return <DashboardHeader title={startCase(title)} count={count} />;
}

export default CategoryHeader;
