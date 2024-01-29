import {useSteps} from '@chakra-ui/react';
import React, {createContext, useContext} from 'react';

export const DashboadStepFormContext = createContext();

export function DashboadStepFormProvider(props) {
	const {children, steps} = props;

	const {activeStep, setActiveStep} = useSteps({
		index: 0,
		count: steps.length,
	});

	return (
		<DashboadStepFormContext.Provider value={{activeStep, setActiveStep}}>
			{children}
		</DashboadStepFormContext.Provider>
	);
}

const useWithSteps = () => useContext(DashboadStepFormContext);

export function withSteps(Component) {
	return function (props) {
		const stepProps = useWithSteps();

		return <Component {...stepProps} {...props} />;
	};
}
