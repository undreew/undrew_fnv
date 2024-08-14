import {useState} from 'react';
import {getCartById} from 'api/cart';

function useGetCart() {
	const [isFetching, setIsFetching] = useState(false);
	const [data, setData] = useState([]);

	async function onGetCart() {
		setIsFetching(true);
		try {
			const {data} = await getCartById();
			setData(data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsFetching(false);
		}
	}

	return {
		isFetching,
		onGetCart,
		data,
	};
}

export default useGetCart;
