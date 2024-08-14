import {forEach} from 'lodash';

function useGetParseSizes(items) {
	let data = [];

	forEach(items, (item) => {
		const {size} = item || {};
		data.push(size);
	});

	return {
		sizes: data,
	};
}

export default useGetParseSizes;
