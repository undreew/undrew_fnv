import {useFormik} from 'formik';
import {object, string} from 'yup';

function useLogin() {
	const dummyApi = async () => null;

	async function postLogin(formData) {
		try {
			await dummyApi(formData);
		} catch (error) {
			console.log(error);
		}
	}

	const initialValues = {
		email: '',
		password: '',
	};

	const validationSchema = object({
		email: string().email('Invalid email.').required('This field is required.'),
		password: string().required('This field is required.'),
	});

	return useFormik({
		initialValues,
		validationSchema,
		onSubmit: postLogin,
	});
}

export default useLogin;
