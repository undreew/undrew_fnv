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
	const {type = 'guest', ...rest} = props;
	return <Layouts type={type} {...rest} />;
}

function PrivateLayout(props) {
	const {
		header = true,
		aside = true,
		footer = true,
		type = 'private',
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
