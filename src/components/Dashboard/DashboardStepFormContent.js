import {Box, Button, Card, CardBody, CardFooter} from '@chakra-ui/react';
import React, {useRef} from 'react';
import {formSerialize, formValidate} from 'utils/forms';

function DashboardStepFormContent(props) {
	const {children, show, onPrev, onNext, nextButtonText} = props;

	const ref = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();

		const form = ref.current;

		if (formValidate(form)) {
			const formData = formSerialize(form);
			onNext(formData);
		}
	}

	return (
		<Box
			as='form'
			ref={ref}
			noValidate
			onSubmit={handleSubmit}
			display={show ? 'block' : 'none'}
		>
			<Card>
				<CardBody>{children}</CardBody>

				<CardFooter justify='flex-end' gap={2}>
					{onPrev && (
						<Button
							w={24}
							size='sm'
							onClick={onPrev}
							variant='outline'
							colorScheme='blue'
						>
							Prev
						</Button>
					)}

					<Button
						w={24}
						size='sm'
						onClick={handleSubmit}
						variant='outline'
						colorScheme='blue'
					>
						{nextButtonText}
					</Button>
				</CardFooter>
			</Card>
		</Box>
	);
}

export default DashboardStepFormContent;
