import {useState} from 'react';
import {enqueueSnackbar} from 'notistack';
import {getWishlist} from 'api/wishlist';

function useGetWishlist() {
	const [isFetching, setIsFetching] = useState(false);
	const [data, setData] = useState({});

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

	return {
		data,
		isFetching,
		onGetWishlist,
	};
}

export default useGetWishlist;
