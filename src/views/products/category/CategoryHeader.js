import React from 'react';
import {DashboardHeader} from 'components/Dashboard';
import {PRODUCT_CATEGORIES} from 'constants/products';

function CategoryHeader({title, count}) {
	return <DashboardHeader title={PRODUCT_CATEGORIES[title]} count={count} />;
}

export default CategoryHeader;
