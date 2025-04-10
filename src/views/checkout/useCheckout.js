import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {enqueueSnackbar} from 'notistack';

const api = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(apiData);
		}, 2000);
	});

const apiData = {data: true};

function useCheckout() {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	async function onCheckout() {
		setIsLoading(true);
		try {
			const {data} = await api();
			if (data) return navigate('/checkout?success=true');
		} catch ({message}) {
			enqueueSnackbar(message, {variant: 'error', autoHideDuration: 1500});
		} finally {
			setIsLoading(false);
		}
	}

	return {
		isCheckingOut: isLoading,
		onCheckout,
	};
}

export default useCheckout;
