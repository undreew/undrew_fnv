import React from 'react';

import {DashboardContent} from 'components/Dashboard';

import DetailProduct from './DetailProduct';
import DetailBreadcrumb from './DetailBreadcrumb';

import useGetProductDetail from './useGetProductDetail';
import {ProductImagesGallery} from 'components/Product';

function Index() {
	const {data} = useGetProductDetail(); // isLoading

	return (
		<div>
			<DetailBreadcrumb data={data} />

			<DashboardContent gap={10}>
				<ProductImagesGallery data={data} />

				<DetailProduct data={data} />
			</DashboardContent>
		</div>
	);
}

export default Index;
