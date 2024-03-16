import Products from 'views/products';
import ProductsList from 'views/products/list';
import ProductView from 'views/products/view';
import ProductDetails from 'views/products/view/detail';

const products = {
	path: '/products',
	element: Products,
	children: [
		// products list
		{
			index: true,
			element: ProductsList,
		},
		// product view
		{
			path: '/products/:id',
			element: ProductView,
			children: [
				// product details
				{
					index: true,
					element: ProductDetails,
				},
			],
		},
	],
};

export default products;
