import {Box} from '@chakra-ui/react';
import React, {Fragment} from 'react';

const MENU_TOP_OFFSET = 95;

function PageHeaderHoverMenuBackdrop({isOpen, onClick, backDropOffset}) {
	if (!isOpen) return;
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
		handleBackdrop = () => {},
	} = props;

	const backDropOffset = height + MENU_TOP_OFFSET;

	return (
		<Fragment>
			<PageHeaderHoverMenuBackdrop
				backDropOffset={backDropOffset}
				onClick={handleBackdrop}
				isOpen={isOpen}
			/>
			<Box
				onMouseLeave={() => onHover('out')}
				sx={{
					backdropFilter: 'blur(5px)',
					border: 'none',
					display: isOpen ? 'block' : 'none',
					position: 'absolute',
					zIndex,
					top: MENU_TOP_OFFSET,
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
