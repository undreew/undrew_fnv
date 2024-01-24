import {useFormik} from 'formik';
import {object, string} from 'yup';
import {postRegister} from 'api/auth';
import {useAuth} from 'contexts/AuthContext';

function useRegister() {
	const {setAuth} = useAuth();

	async function handleRegister(formData) {
		try {
			const {session_id} = await postRegister(formData);
			setAuth(session_id);
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
