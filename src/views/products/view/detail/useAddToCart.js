import {useState} from 'react';

function useAddToCart() {
	const [isLoading, setIsLoading] = useState(false);

	async function postData(color) {
		setIsLoading(true);
		try {
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	return {
		isLoading,
		postData,
	};
}

export default useAddToCart;
