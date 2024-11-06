import useQuery from 'hooks/useQuery';
import {getProducts} from 'api/products';
import {useEffect, useState} from 'react';
import {enqueueSnackbar} from 'notistack';

function useGetProducts() {
	const {query} = useQuery();

	const [isLoading, setIsLoading] = useState(false);
	const [isReloading, setIsReloading] = useState(false);

	const [data, setData] = useState([]);
	const [nextPage, setNextPage] = useState(0);
	const [hasNext, setHasNext] = useState(false);

	async function getData(isReload) {
		const _query = {
			...query,
			page: !isReload ? nextPage : '',
		};

		isReload ? setIsReloading(true) : setIsLoading(true);

		try {
			const {data: dataResponse, meta} = await getProducts(_query);
			const {hasMore, nextPage} = meta || {};

			setData((prevData) => [...(!isReload ? prevData : []), ...dataResponse]);
			setHasNext(hasMore);
			setNextPage(nextPage);
		} catch ({message}) {
			enqueueSnackbar(message, {variant: 'error', autoHideDuration: 1500});
		} finally {
			isReload ? setIsReloading(false) : setIsLoading(false);
		}
	}

	useEffect(() => {
		getData(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return {
		data,
		hasNext,
		isLoading,
		isReloading,
		loadMore: getData,
	};
}

export default useGetProducts;
