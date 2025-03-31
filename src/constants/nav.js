import {
	PRODUCT_CATEGORIES_LABEL,
	PRODUCT_CATEGORIES_ROUTE_PATH,
} from './products';

export const NAVS = {
	collection: 'collection',
	new_in: 'new_in',
	modiweek: 'modiweek',
	plus_size: 'plus_size',
	sustainability: 'sustainability',
};

export const NAVS_LABEL = {
	[NAVS['collection']]: 'Collection',
	[NAVS['new_in']]: 'New In',
	[NAVS['modiweek']]: 'Modiweek',
	[NAVS['plus_size']]: 'Plus Size',
	[NAVS['sustainability']]: 'Sustainability',
};

const CATEGORY_ITEMS = [
	{
		label: 'Shop All',
		to: '/',
	},
	{
		label: PRODUCT_CATEGORIES_LABEL['blouses_and_tops'],
		to: PRODUCT_CATEGORIES_ROUTE_PATH['blouses_and_tops'],
	},
	{
		label: PRODUCT_CATEGORIES_LABEL['pants'],
		to: PRODUCT_CATEGORIES_ROUTE_PATH['pants'],
	},
	{
		label: PRODUCT_CATEGORIES_LABEL['dresses_and_jumpsuits'],
		to: PRODUCT_CATEGORIES_ROUTE_PATH['dresses_and_jumpsuits'],
	},
	{
		label: PRODUCT_CATEGORIES_LABEL['outwears_and_jackets'],
		to: PRODUCT_CATEGORIES_ROUTE_PATH['outwears_and_jackets'],
	},
	{
		label: PRODUCT_CATEGORIES_LABEL['pullovers'],
		to: PRODUCT_CATEGORIES_ROUTE_PATH['pullovers'],
	},
	{
		label: PRODUCT_CATEGORIES_LABEL['tees'],
		to: PRODUCT_CATEGORIES_ROUTE_PATH['tees'],
	},
	{
		label: PRODUCT_CATEGORIES_LABEL['shorts_and_skirts'],
		to: PRODUCT_CATEGORIES_ROUTE_PATH['shorts_and_skirts'],
	},
];

export const NAV_SUBLINKS = {
	[NAVS['collection']]: {
		title: NAVS.collection,
		sub_categories: [
			{
				title: 'Category',
				items: CATEGORY_ITEMS,
			},
			{
				title: 'Featured',
				items: [
					{label: 'New In', to: '/new'},
					{label: 'Modiweek', to: '/modiweek'},
					{label: 'Plus Size', to: '/plus-size'},
					{label: 'Best Seller', to: '/best-seller'},
				],
			},
			{
				title: 'More',
				items: [
					{label: 'Bundles', to: '/bundles'},
					{label: 'Occasion Wear', to: '/occassion'},
					{label: 'Matching Set', to: '/set'},
					{label: 'Suiting', to: '/suit'},
				],
			},
		],
		images: [
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/life-02.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlmZS0wMi53ZWJwIiwiaWF0IjoxNzEzMzAwOTA0LCJleHAiOjE5MDI1MTY5MDR9.utui39p74ZoRAOY02aFU28-rWmoaJv3QDD6URYNrB58&t=2024-04-16T20%3A55%3A04.841Z',
				alt: 'Blouses',
			},
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/life-01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlmZS0wMS53ZWJwIiwiaWF0IjoxNzEzMzAwODQyLCJleHAiOjE5MDI1MTY4NDJ9.mohfNxVTIAIgAjbICoEDITct4H2rj26jKwPoOG9pAa0&t=2024-04-16T20%3A54%3A03.059Z',
				alt: 'Plus Size',
			},
		],
	},
	[NAVS['new_in']]: {
		title: NAVS.new_in,
		sub_categories: [
			{
				title: 'Category',
				items: CATEGORY_ITEMS,
			},
			{
				title: 'Trending',
				items: [
					{label: 'Plus Size', to: '/plus-size'},
					{label: 'Fall Collection', to: '/fall'},
					{label: 'Modiweek', to: '/modiweek'},
				],
			},
		],
		images: [
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/ADay_Cabo_RJC_38_v2_1400x.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQURheV9DYWJvX1JKQ18zOF92Ml8xNDAweC53ZWJwIiwiaWF0IjoxNzEzMjU3MTUwLCJleHAiOjE5MDI0NzMxNTB9.LY88SyGQ5tt-c4r2K8y3Zhi0XyglnAbSx7gepe2rddU&t=2024-04-16T08%3A45%3A50.903Z',
				alt: 'Fall Collection',
			},
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/life-04.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGlmZS0wNC5qcGciLCJpYXQiOjE3MTMzMDEwMjIsImV4cCI6MTkwMjUxNzAyMn0.ctESxmDAaahvgZmmx1XRT71fnfWDZcXgVMdk9iV65cg&t=2024-04-16T20%3A57%3A03.119Z',
				alt: 'Blouses',
			},
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/MINI-DRESS-BEACH-0098-Edit_1400x%20(1).webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvTUlOSS1EUkVTUy1CRUFDSC0wMDk4LUVkaXRfMTQwMHggKDEpLndlYnAiLCJpYXQiOjE3MTMyNTU0MTAsImV4cCI6MTc0NDc5MTQxMH0.GGQDZp6OipKrv9afL3yAW2UL-UiIYLDGBStd2ZCTC6A&t=2024-04-16T08%3A16%3A51.438Z',
				alt: 'Dresses',
			},
		],
	},
	[NAVS['modiweek']]: {
		title: NAVS.modiweek,
		sub_categories: [
			{
				title: 'Category',
				items: CATEGORY_ITEMS,
			},
		],
		images: [
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/zara-01.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvemFyYS0wMS5qcGciLCJpYXQiOjE3MTMzMDExNjYsImV4cCI6MTkwMjUxNzE2Nn0.S6Ymdc2qHrrsKKn1k4BnJuHDWx9MxIBjdxh7d6yRDvs&t=2024-04-16T20%3A59%3A26.501Z',
				alt: 'Blouses',
			},
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/zara-02.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvemFyYS0wMi5qcGciLCJpYXQiOjE3MTMzMDEyMTgsImV4cCI6MTkwMjUxNzIxOH0.Mc9Y-MttDLwVggJ6G2uMQaXcJJni2Dd8WKYHUEPLsCk&t=2024-04-16T21%3A00%3A18.773Z',
				alt: 'Dresses',
			},
		],
	},
	[NAVS['plus_size']]: {
		title: NAVS.plus_size,
		sub_categories: [
			{
				title: 'Category',
				items: CATEGORY_ITEMS,
			},
		],
		images: [
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/plussize-03.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcGx1c3NpemUtMDMud2VicCIsImlhdCI6MTcxMzMwMjAwMiwiZXhwIjoxOTAyNTE4MDAyfQ.EwkZHODcLgKWPXFpancaIMh2uRSqcvCx_YMNf0ZnNMw&t=2024-04-16T21%3A13%3A22.540Z',
				alt: 'Pants',
			},
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/plussize-02.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcGx1c3NpemUtMDIud2VicCIsImlhdCI6MTcxMzMwMTgxMywiZXhwIjoxOTAyNTE3ODEzfQ.hNXxJmH2LD14EuVvhLyHkK6_HkZ4miZa4rH8IK-Iiv4&t=2024-04-16T21%3A10%3A13.793Z',
				alt: 'Dresses',
			},
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/plussize-01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcGx1c3NpemUtMDEud2VicCIsImlhdCI6MTcxMzMwMTc1NywiZXhwIjoxOTAyNTE3NzU3fQ.KFhAR7c6qV4u_qqiZhvgdu3YaVZhVPA7cc51GSEot9M&t=2024-04-16T21%3A09%3A17.930Z',
				alt: 'Blouses',
			},
		],
	},
	[NAVS['sustainability']]: {
		title: NAVS.sustainability,
		sub_categories: [
			{
				title: 'Sustainability',
				items: [
					{label: 'Mission', to: '/mission'},
					{label: 'Processing', to: '/processing'},
					{label: 'Materials', to: '/materials'},
					{label: 'Packaging', to: '/packaging'},
					{label: 'Product Care', to: '/product-care'},
					{label: 'Our Suppliers', to: '/suppliers'},
				],
			},
		],
		images: [
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/sus-01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3VzLTAxLndlYnAiLCJpYXQiOjE3MTMzMDIxMTgsImV4cCI6MTkwMjUxODExOH0.sLFCcAENE7C3jtTPz_5kUbJn8Wm7W9KFK19fSURKjoQ&t=2024-04-16T21%3A15%3A18.736Z',
				alt: 'Sustainability 1',
			},
			{
				src: 'https://vbvdajzlbaysznoviuwa.supabase.co/storage/v1/object/sign/images/k-02.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvay0wMi53ZWJwIiwiaWF0IjoxNzEzMzAyMzUwLCJleHAiOjE5MDI1MTgzNTB9.0bhrkXqRmLJOGVDljkYPPfpMETjMVpyKqxemsZoow8M&t=2024-04-16T21%3A19%3A11.038Z',
				alt: 'Sustainability 2',
			},
		],
	},
};
