import {postAuthLogin} from 'api/auth';
import {useAuth} from 'contexts/AuthContext';
import {useFormik} from 'formik';
import {useSnackbar} from 'notistack';
import {object, string} from 'yup';

function useLogin() {
	const {setAuth} = useAuth();
	const {enqueueSnackbar} = useSnackbar();

	async function handleLogin(formData) {
		try {
			const {session_id} = await postAuthLogin(formData);
			setAuth(session_id);
		} catch ({message}) {
			enqueueSnackbar(message, {variant: 'error', autoHideDuration: 1500});
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
		onSubmit: handleLogin,
	});
}

export default useLogin;
