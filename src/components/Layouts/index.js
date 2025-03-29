import {useLayout} from 'contexts/LayoutContext';
import {useEffect} from 'react';

function Layouts(props) {
	const {header, aside, footer, children, type} = props;
	const {setLayout} = useLayout();

	useEffect(() => {
		setLayout({
			header,
			aside,
			footer,
			type,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return children;
}

function GuestLayout(props) {
	const {
		header = false,
		aside = false,
		footer = false,
		type = 'guest',
		children,
		...rest
	} = props;
	return (
		<Layouts
			header={header}
			aside={aside}
			footer={footer}
			type={type}
			{...rest}
		>
			{children}
		</Layouts>
	);
}

function PrivateLayout(props) {
	const {
		header = true,
		aside = true,
		footer = true,
		type = 'private',
		children,
		...rest
	} = props;

	return (
		<Layouts
			header={header}
			aside={aside}
			footer={footer}
			type={type}
			{...rest}
		>
			{children}
		</Layouts>
	);
}

function PublicLayout(props) {
	const {
		header = true,
		aside = false,
		footer = false,
		type = 'public',
		...rest
	} = props;

	return (
		<Layouts
			header={header}
			aside={aside}
			footer={footer}
			type={type}
			{...rest}
		/>
	);
}

export {GuestLayout, PublicLayout, PrivateLayout};
