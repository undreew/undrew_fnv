import {find, forEach} from 'lodash';

function useGetParseSizes(items, color) {
	let data = [];

	forEach(items, (item) => {
		const {size, colors} = item || {};

		if (find(colors, (c) => c.name === color)) {
			data.push(size);
		}
	});

	return {
		sizes: data,
	};
}

export default useGetParseSizes;
