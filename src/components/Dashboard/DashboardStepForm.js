import {Container, useSteps} from '@chakra-ui/react';
import React from 'react';
import DashboardStepFormHeader from './DashboardStepFormHeader';
import DashboardStepFormContent from './DashboardStepFormContent';

function DashboardStepForm(props) {
	const {steps, children} = props;

	const {activeStep, setActiveStep} = useSteps({
		index: 0,
		count: steps.length,
	});

	function handleSubmit(formData) {
		console.log(formData);
	}

	function handlePrev(formData) {
		console.log(formData);
		setActiveStep(activeStep - 1);
	}

	function handleNext(formData) {
		console.log(formData);
		setActiveStep(activeStep + 1);
	}

	return (
		<Container
			maxW={{
				sm: '8xl',
				md: '2xl',
				lg: '3xl',
			}}
		>
			<DashboardStepFormHeader steps={steps} current={activeStep} />

			{children.map((child, index) => {
				const isFirst = index <= 0;
				const isLast = index >= children.length - 1;

				let onPrev = isFirst ? null : handlePrev;
				let onNext = isLast ? handleSubmit : handleNext;
				let nextButtonText = isLast ? 'Submit' : 'Continue';

				return (
					<DashboardStepFormContent
						key={index}
						onPrev={onPrev}
						onNext={onNext}
						show={index === activeStep}
						nextButtonText={nextButtonText}
					>
						{child}
					</DashboardStepFormContent>
				);
			})}
		</Container>
	);
}

export default DashboardStepForm;
