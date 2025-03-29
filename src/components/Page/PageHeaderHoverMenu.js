import {Box} from '@chakra-ui/react';
import React, {Fragment} from 'react';

function PageHeaderHoverMenuBackdrop({isOpen}) {
	if (!isOpen) return;
	return (
		<Box
			left={0}
			top={540}
			width='100%'
			zIndex={999}
			height='100vh'
			position='absolute'
			backdropFilter='blur(10px)'
			bgColor='rgba(0, 0, 0, 0.4)'
		/>
	);
}

function PageHeaderHoverMenu(props) {
	const {children, isOpen = false, onHover = () => {}} = props;

	return (
		<Fragment>
			<PageHeaderHoverMenuBackdrop isOpen={isOpen} />
			<Box
				onMouseLeave={() => onHover('out')}
				sx={{
					backdropFilter: 'blur(5px)',
					border: 'none',
					display: isOpen ? 'block' : 'none',
					position: 'absolute',
					zIndex: 1000,
					top: 95,
					left: 0,
					width: '100%',
					bgColor: '#fff',
					height: '450px',
				}}
			>
				{children}
			</Box>
		</Fragment>
	);
}

export default PageHeaderHoverMenu;
