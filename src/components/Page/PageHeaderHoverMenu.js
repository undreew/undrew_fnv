import {Box, useBreakpointValue} from '@chakra-ui/react';
import React, {Fragment} from 'react';

const BASE_MENU_TOP_OFFSET = 95;

function PageHeaderHoverMenuBackdrop({
	isOpen,
	onClick,
	isBackdropOpen,
	backDropOffset,
}) {
	if (!isOpen || !isBackdropOpen) return;
	return (
		<Box
			left={0}
			width='100%'
			zIndex={999}
			onClick={onClick}
			position='absolute'
			top={backDropOffset}
			backdropFilter='blur(10px)'
			bgColor='rgba(0, 0, 0, 0.4)'
			height={`calc(100% - ${backDropOffset}px)`}
		/>
	);
}

function PageHeaderHoverMenu(props) {
	const {
		children,
		height = 450,
		zIndex = 1500,
		isOpen = false,
		onHover = () => {},
		isBackdropOpen = true,
		handleBackdrop = () => {},
	} = props;

	const topOffset = useBreakpointValue({
		base: 90,
		md: BASE_MENU_TOP_OFFSET,
	});
	const backDropOffset = height + topOffset;

	return (
		<Fragment>
			<PageHeaderHoverMenuBackdrop
				isBackdropOpen={isBackdropOpen}
				backDropOffset={backDropOffset}
				onClick={handleBackdrop}
				isOpen={isOpen}
			/>
			<Box
				onMouseLeave={() => onHover('out')}
				sx={{
					boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
					backdropFilter: 'blur(5px)',
					border: 'none',
					display: isOpen ? 'block' : 'none',
					position: 'absolute',
					zIndex,
					top: topOffset,
					left: 0,
					width: '100%',
					bgColor: '#fff',
					height,
				}}
			>
				{children}
			</Box>
		</Fragment>
	);
}

export default PageHeaderHoverMenu;
