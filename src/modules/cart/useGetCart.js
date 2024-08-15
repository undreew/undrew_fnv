import {useEffect, useState} from 'react';
import {getCartById} from 'api/cart';
import {enqueueSnackbar} from 'notistack';

function useGetCart() {
	const [isFetching, setIsFetching] = useState(false);
	const [data, setData] = useState([]);

	async function onGetCart() {
		setIsFetching(true);
		try {
			const {data} = await getCartById();
			setData(data);
		} catch ({message}) {
			enqueueSnackbar(message, {variant: 'error', autoHideDuration: 1500});
		} finally {
			setIsFetching(false);
		}
	}

	useEffect(() => {
		onGetCart();
	}, []);

	return {
		isFetching,
		onGetCart,
		data,
	};
}

export default useGetCart;
