import React from 'react';

import {DashboardContent} from 'components/Dashboard';
import {ProductImagesGallery} from 'components/Product';

import DetailProduct from './DetailProduct';
import DetailBreadcrumb from './DetailBreadcrumb';
import DetailAccordionStatic from './DetailAccordionStatic';
import DetailProductMaterial from './DetailProductMaterial';

import useGetProductDetail from './useGetProductDetail';

function Index() {
	const {data} = useGetProductDetail(); // isLoading

	return (
		<div>
			<DetailBreadcrumb data={data} />

			<DashboardContent gap={10}>
				<ProductImagesGallery data={data} />

				<DetailProduct data={data} />
			</DashboardContent>

			<DashboardContent gap={10}>
				<DetailAccordionStatic />

				<DetailProductMaterial />
			</DashboardContent>
		</div>
	);
}

export default Index;
