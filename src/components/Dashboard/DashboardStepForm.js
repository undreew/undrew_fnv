import React from 'react';
import {Container} from '@chakra-ui/react';
import DashboardStepFormHeader from './DashboardStepFormHeader';
import DashboardStepFormContent from './DashboardStepFormContent';
import {
	DashboadStepFormProvider,
	DashboadStepFormContext,
} from './DashboadStepFormContext';

function DashboardStepForm(props) {
	const {steps, children, onNext, onPrev, onEdit, onSubmit} = props;

	return (
		<Container
			maxW={{
				sm: '8xl',
				md: '2xl',
				lg: '3xl',
			}}
		>
			<DashboadStepFormProvider steps={steps} onEdit={onEdit}>
				<DashboadStepFormContext.Consumer>
					{({activeStep, setActiveStep}) => {
						function handlePrev(e) {
							if (onPrev) onPrev(activeStep);
							setActiveStep(activeStep - 1);
						}

						function handleNext(formData) {
							if (onNext) onNext(formData, activeStep);
							setActiveStep(activeStep + 1);
						}

						return (
							<>
								<DashboardStepFormHeader steps={steps} current={activeStep} />

								{children.map((child, index) => {
									const isFirst = index <= 0;
									const isLast = index >= children.length - 1;

									let onPrev = isFirst ? null : handlePrev;
									let onNext = isLast ? onSubmit : handleNext;
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
							</>
						);
					}}
				</DashboadStepFormContext.Consumer>
			</DashboadStepFormProvider>
		</Container>
	);
}

export default DashboardStepForm;
