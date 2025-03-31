import React from 'react';
import {useParams} from 'react-router-dom';

import ListProducts from '../list/ListProducts';

import CategoryHeader from './CategoryHeader';
import CategoryBreadcrumbs from './CategoryBreadcrumbs';

function Index() {
	const {category} = useParams();

	return (
		<ListProducts
			queries={category}
			Breadcrumb={CategoryBreadcrumbs}
			Header={({count}) => <CategoryHeader title={category} count={count} />}
		/>
	);
}

export default Index;
