import item1 from 'assets/items/image (8).png';
import item2 from 'assets/items/image (10).png';

const ITEMS = [
	{
		name: 'Wrap Top',
		list_description: 'Turn it up Top',
		full_description:
			'Versatile and universally flattering, our wrap blouse can be tied, draped, snapped and wrapped mulitple ways',
		colors: ['red', 'white'],
		size: ['xl', 's', 'md', 'lg', 'xl'],
		price: '$160',
		in_wishlist: true,
		image: item1,
		is_new: true,
	},
	{
		name: 'Essential T-Shirt',
		list_description: 'Turn it up T-Shirt',
		full_description:
			'Versatile and universally flattering, our wrap blouse can be tied, draped, snapped and wrapped mulitple ways',
		colors: ['black', 'blue', 'green'],
		size: ['xl', 's', 'md', 'lg', 'xl'],
		price: '$95',
		in_wishlist: false,
		image: item2,
		is_new: false,
	},
];

export default ITEMS;
