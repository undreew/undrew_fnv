import React, {useEffect, useState} from 'react';
import {FaSearch, FaTimes} from 'react-icons/fa';
import {useLocation, useNavigate} from 'react-router-dom';

import {Box, Container, useDisclosure} from '@chakra-ui/react';
import {
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from '@chakra-ui/react';

import {ButtonIcon} from 'components/Buttons';

import PageHeaderHoverMenu from './PageHeaderHoverMenu';
import {DEFAULT_CONTAINER_BREAKPOINTS} from 'constants/breakpoints';

import urlJoin from 'url-join';
import {get, omit} from 'lodash';
import {ROUTES} from 'constants/routes';
import useQuery, {queryStringify} from 'hooks/useQuery';

const SEARCH_QUERY = 'name';

function PageHeaderSearch() {
	const location = useLocation();
	const navigate = useNavigate();
	const {query, pushQuery} = useQuery();
	const [search, setSearch] = useState('');
	const {isOpen, onToggle} = useDisclosure();

	const productSearch = get(query, SEARCH_QUERY);
	const isSearch = location.pathname === ROUTES.PRODUCTS.SEARCH;

	function handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();

		if (!search) {
			return pushQuery(omit(query, SEARCH_QUERY));
		}

		const options = {addQueryPrefix: true};
		const updatedQuery = {...omit(query, SEARCH_QUERY), [SEARCH_QUERY]: search};

		navigate(
			urlJoin(ROUTES.PRODUCTS.SEARCH, queryStringify(updatedQuery, options))
		);
	}

	function handleChange(e) {
		setSearch(e.target.value);
	}

	function handleReset() {
		setSearch('');
	}

	useEffect(() => {
		if (isOpen) {
			setSearch(productSearch);
		} else {
			setSearch('');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen, query]);

	return (
		<Box>
			<ButtonIcon
				label='Search'
				onClick={onToggle}
				icon={isOpen ? <FaTimes /> : <FaSearch />}
			/>

			<PageHeaderHoverMenu
				height={100}
				zIndex={1400}
				isOpen={isOpen}
				handleBackdrop={onToggle}
				isBackdropOpen={!isSearch}
			>
				<Container maxWidth={DEFAULT_CONTAINER_BREAKPOINTS} pt={5} pb={10}>
					<InputGroup as='form' onSubmit={handleSubmit}>
						<InputLeftElement color='neutral.grayADADAD'>
							<FaSearch />
						</InputLeftElement>
						<Input
							type='text'
							value={search || ''}
							placeholder='Search'
							variant='modimaFlush'
							onChange={handleChange}
						/>

						{search && (
							<InputRightElement
								cursor='pointer'
								onClick={handleReset}
								color='neutral.grayADADAD'
								_hover={{color: 'neutral.gray606060'}}
							>
								<FaTimes />
							</InputRightElement>
						)}
					</InputGroup>
				</Container>
			</PageHeaderHoverMenu>
		</Box>
	);
}

export default PageHeaderSearch;
