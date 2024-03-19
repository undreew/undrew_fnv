import React from 'react';

import {DashboardContent} from 'components/Dashboard';

import DetailProduct from './DetailProduct';
import DetailBreadcrumb from './DetailBreadcrumb';

import useGetProductDetail from './useGetProductDetail';
import {ProductImagesGallery} from 'components/Product';

function Index() {
	const {isLoading, data} = useGetProductDetail();

	return (
		<div>
			<DetailBreadcrumb data={data} />

			<DashboardContent>
				<ProductImagesGallery data={data} />

				<DetailProduct data={data} />
			</DashboardContent>
		</div>
	);
}

export default Index;
