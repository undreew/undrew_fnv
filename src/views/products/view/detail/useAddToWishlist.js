import {useState} from 'react';

function useAddToWishlist(id) {
	const [isLoading, setIsLoading] = useState(false);

	async function postData() {
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

export default useAddToWishlist;
