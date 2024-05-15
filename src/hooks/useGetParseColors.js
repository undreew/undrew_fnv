import {forEach} from 'lodash';

function useGetParseColors(items) {
	let data = [];

	forEach(items, (item) => {
		const {colors} = item || {};
		forEach(colors, (color) => {
			const {name} = color || {};
			data.push(name);
		});
	});

	return {
		colors: data,
	};
}

export default useGetParseColors;
