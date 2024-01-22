import {useState} from 'react';

function useRegister(callback) {
	const [isLoading, setIsLoading] = useState(false);

	const dummyApi = async () => null;

	async function postRegister(formData) {
		setIsLoading(true);
		try {
			await dummyApi(formData);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	return {
		isLoading,
		onSubmit: postRegister,
	};
}

export default useRegister;
