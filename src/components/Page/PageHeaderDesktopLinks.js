import React, {useState} from 'react';
import {HStack, Text} from '@chakra-ui/react';

import {keys, map, some} from 'lodash';
import {NAV_SUBLINKS, NAVS, NAVS_LABEL} from 'constants/nav';

import PageHeaderDesktopHoverMenu from './PageHeaderDesktopHoverMenu';

const defaultState = {isOpen: false, item: ''};

function PageHeaderDesktopLinks() {
	const [hovered, setHovered] = useState(defaultState);
	const {isOpen, item} = hovered;

	function handleHover(type = 'out', e) {
		if (type === 'out') {
			setHovered(defaultState);
		} else {
			const target = e.target;
			const isPTag = target.tagName === 'P';
			if (isPTag && some(keys(NAVS), (i) => i === target.id)) {
				setHovered({isOpen: true, item: target.id});
			}
		}
	}

	return (
		<HStack
			sx={{
				flexGrow: 1,
				alignSelf: 'stretch',
				alignItems: 'center',
				justifyContent: 'center',
			}}
			onMouseLeave={(e) => handleHover('out')}
			onMouseOver={(e) => handleHover('in', e)}
		>
			<HStack
				gap={10}
				alignSelf='stretch'
				display={{base: 'none', md: 'none', lg: 'flex', xl: 'flex'}}
			>
				{map(keys(NAVS), (nav, index) => {
					return (
						<Text
							id={nav}
							key={index}
							sx={{
								display: 'flex',
								alignSelf: 'stretch',
								alignItems: 'center',
								cursor: 'pointer',
								textStyle: 'bodyMd',
								fontFamily: 'heading',
								fontWeight: item === nav ? 'semibold' : 'inherit',
							}}
						>
							{NAVS_LABEL[nav]}
						</Text>
					);
				})}
			</HStack>

			<PageHeaderDesktopHoverMenu
				isOpen={isOpen}
				onHover={handleHover}
				data={NAV_SUBLINKS[NAVS[item]]}
			/>
		</HStack>
	);
}

export default PageHeaderDesktopLinks;
