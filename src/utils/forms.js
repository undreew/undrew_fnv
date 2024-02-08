import serialize from 'form-serialize';
import {isEmpty, merge} from 'lodash';

export function formSerialize(form, options) {
	const {hash, empty} = options || {};

	const serializeOptions = {hash, empty};
	const defaultOptions = {hash: true, empty: true};

	return serialize(form, merge(defaultOptions, serializeOptions));
}

export function formValidate(form) {
	// react-select validation
	const selects = form.getElementsByClassName('react-select--invalid');

	if (form.checkValidity() === false || !isEmpty(selects)) {
		form.classList.add('was-validated');
		return false;
	}

	return true;
}
