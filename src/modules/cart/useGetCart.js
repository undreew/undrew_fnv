import {getCartById} from 'api/cart';
import {enqueueSnackbar} from 'notistack';
import {useEffect, useState} from 'react';
import {useAuth} from 'contexts/AuthContext';

function useGetCart() {
	const {isAuth} = useAuth();

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
		if (isAuth) {
			onGetCart();
		}
	}, [isAuth]);

	return {
		isFetching,
		onGetCart,
		data,
	};
}

export default useGetCart;
