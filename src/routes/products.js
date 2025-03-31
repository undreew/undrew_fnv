import Products from 'views/products';
import ProductView from 'views/products/view';
import ProductsList from 'views/products/list';
import ProductSearch from 'views/products/search';
import ProductCategory from 'views/products/category';
import ProductDetails from 'views/products/view/detail';

const products = {
	path: '/products',
	element: Products,
	children: [
		// products list
		{
			index: true,
			path: '/products',
			element: ProductsList,
		},
		// product search
		{
			path: '/products/search',
			element: ProductSearch,
		},
		// product category
		{
			path: '/products/:category',
			element: ProductView,
			children: [
				{
					index: true,
					path: '/products/:category',
					element: ProductCategory,
				},
				{
					path: '/products/:category/:id',
					element: ProductDetails,
				},
			],
		},
	],
};

export default products;
