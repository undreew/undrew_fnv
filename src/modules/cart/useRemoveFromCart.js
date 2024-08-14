import {useState} from 'react';
import {deleteRemoveItem} from 'api/cart';

function useRemoveFromCart(callback) {
	const [isRemoving, setIsRemoving] = useState(false);

	async function onRemoveItem(formData) {
		setIsRemoving(true);
		try {
			await deleteRemoveItem(formData);
			callback && callback();
		} catch (error) {
			console.log(error);
		} finally {
			setIsRemoving(false);
		}
	}

	return {
		isRemoving,
		onRemoveItem,
	};
}

export default useRemoveFromCart;
