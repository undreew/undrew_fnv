import {useEffect, useState} from 'react';
import {enqueueSnackbar} from 'notistack';
import {getAllProducts} from 'api/products';

function useGetBestSellers() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	async function getData() {
		setIsLoading(true);
		try {
			const {data} = await getAllProducts({best_seller: true});
			setData(data);
		} catch ({message}) {
			enqueueSnackbar(message, {variant: 'error', autoHideDuration: 1500});
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return {
		isLoading,
		data,
	};
}

export default useGetBestSellers;
