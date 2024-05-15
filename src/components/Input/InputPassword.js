import React, {useState} from 'react';
import {FaLock, FaUnlock} from 'react-icons/fa';

import {
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react';

function InputPassword(props) {
	const [showPassword, setShowPassword] = useState(false);

	function handleShow() {
		setShowPassword(!showPassword);
	}

	return (
		<InputGroup>
			<Input type={showPassword ? 'text' : 'password'} {...props} />

			<InputRightElement>
				<IconButton variant='text' onClick={handleShow}>
					{showPassword ? <FaLock /> : <FaUnlock />}
				</IconButton>
			</InputRightElement>
		</InputGroup>
	);
}

export default InputPassword;
