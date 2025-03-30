import Products from 'views/products';
import ProductView from 'views/products/view';
import ProductsList from 'views/products/list';
import ProductSearch from 'views/products/search';
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
		// product search
		{
			path: '/products/search',
			element: ProductSearch,
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
