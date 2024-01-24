import {useFormik} from 'formik';
import {object, string} from 'yup';
import {postRegister} from 'api/auth';

function useRegister() {
	async function handleRegister(formData) {
		try {
			await postRegister(formData);
		} catch (error) {
			console.log(error);
		}
	}

	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	};

	const validationSchema = object({
		firstName: string().required('This field is required.'),
		lastName: string().required('This field is required.'),
		email: string().email('Invalid email.').required('This field is required.'),
		password: string().required('This field is required.'),
	});

	return useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleRegister,
	});
}

export default useRegister;
