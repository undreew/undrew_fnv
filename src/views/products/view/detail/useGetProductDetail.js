import {getProductById} from 'api/products';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function useGetProductDetail() {
	const {id} = useParams();

	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	async function getData() {
		setIsLoading(true);
		try {
			const {data} = await getProductById(id);
			setData(data);
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		data,
		isLoading,
	};
}

export default useGetProductDetail;
