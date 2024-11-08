import {useState} from 'react';
import {getAuthSession} from 'api/auth';

function useGetAccountSession(session) {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({});

	async function getSessionAccount() {
		setIsLoading(true);
		try {
			const data = await getAuthSession();
			setData(data);
		} catch (error) {
			// console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	return {
		data,
		getSessionAccount,
		isLoading,
	};
}

export default useGetAccountSession;
