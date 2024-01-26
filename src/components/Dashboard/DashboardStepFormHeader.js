import {
	Box,
	Step,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
} from '@chakra-ui/react';
import React from 'react';

function DashboardStepFormHeader(props) {
	const {steps, current} = props;

	return (
		<Stepper index={current} orientation='horizontal' mb={5}>
			{steps.map((item, index) => {
				return (
					<Step key={index}>
						<StepIndicator>
							<StepStatus
								complete={<StepIcon />}
								incomplete={<StepNumber />}
								active={<StepNumber />}
							/>
						</StepIndicator>

						<Box>
							<StepTitle>{item}</StepTitle>
						</Box>

						<StepSeparator />
					</Step>
				);
			})}
		</Stepper>
	);
}

export default DashboardStepFormHeader;
