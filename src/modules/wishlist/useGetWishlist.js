import {useEffect, useState} from 'react';
import {enqueueSnackbar} from 'notistack';
import {getWishlist} from 'api/wishlist';
import {useAuth} from 'contexts/AuthContext';

function useGetWishlist() {
	const {isAuth} = useAuth();
	const [isFetching, setIsFetching] = useState(false);
	const [data, setData] = useState([]);

	async function onGetWishlist() {
		setIsFetching(true);
		try {
			const {data} = await getWishlist();
			setData(data);
		} catch ({message}) {
			enqueueSnackbar(message, {variant: 'error', autoHideDuration: 1500});
		} finally {
			setIsFetching(false);
		}
	}

	useEffect(() => {
		if (isAuth) {
			onGetWishlist();
		}
	}, [isAuth]);

	return {
		data,
		isFetching,
		onGetWishlist,
	};
}

export default useGetWishlist;
