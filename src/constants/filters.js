export const SORT_BY_ITEMS = {
	featured: 'Featured',
	best_seller: 'Best Seller',
};

export const SORT_BY_PRICE = {
	low_to_high: 'Low to High',
	high_to_low: 'High to Low',
};

export const SORT_BY_SIZE = {
	xs: 'XS',
	s: 'S',
	m: 'M',
	lg: 'LG',
	xl: 'XL',
};

export const SORT_BY_COLLECTION = {
	in_stock: 'In Stock',
	out_stock: 'Out of Stock',
};

export const SORT_BY_FABRIC = {
	cotton: 'Cotton',
	linen: 'Linen',
	wool: 'Wool',
	silk: 'Silk',
	cashmere: 'Cashmere',
};

export const FILTERS = {
	...SORT_BY_ITEMS,
	...SORT_BY_PRICE,
	...SORT_BY_SIZE,
	...SORT_BY_COLLECTION,
	...SORT_BY_FABRIC,
};
