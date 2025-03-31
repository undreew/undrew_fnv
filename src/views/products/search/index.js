import React from 'react';

import SearchHeader from './SearchHeader';
import SearchBreadcrumb from './SearchBreadcrumb';

import useQuery from 'hooks/useQuery';
import ListProducts from '../list/ListProducts';

function Index() {
	const {query} = useQuery();
	const {name} = query || {};

	return (
		<ListProducts
			search={name}
			hasImage={false}
			Breadcrumb={SearchBreadcrumb}
			Header={({count}) => <SearchHeader title={name} count={count} />}
		/>
	);
}

export default Index;
