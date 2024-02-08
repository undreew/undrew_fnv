import {useSteps} from '@chakra-ui/react';
import React, {createContext, useContext} from 'react';

const DashboadStepFormContext = createContext();

function DashboadStepFormProvider(props) {
	const {children, steps, onEdit} = props;

	const {activeStep, setActiveStep} = useSteps({
		index: 0,
		count: steps.length,
	});

	function handleEdit(step) {
		setActiveStep(step);
		onEdit(step);
	}

	return (
		<DashboadStepFormContext.Provider
			value={{activeStep, setActiveStep, handleEdit}}
		>
			{children}
		</DashboadStepFormContext.Provider>
	);
}

const useWithSteps = () => useContext(DashboadStepFormContext);

function withSteps(Component) {
	return function (props) {
		const stepProps = useWithSteps();

		return <Component {...stepProps} {...props} />;
	};
}

export {
	DashboadStepFormContext,
	DashboadStepFormProvider,
	useWithSteps,
	withSteps,
};
