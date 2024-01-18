import React, {createContext, useContext, useState} from 'react';

const LayoutContext = createContext();

const initialLayout = {
	header: false,
	aside: false,
	footer: false,
	type: 'guest',
};

function LayoutProvider({children}) {
	const [layout, setLayout] = useState(initialLayout);

	function updateLayout(layout) {
		return setLayout((prevLayout) => ({...prevLayout, ...layout}));
	}

	const {header, aside, footer, type} = layout || {};

	return (
		<LayoutContext.Provider
			value={{header, aside, footer, type, setLayout: updateLayout}}
		>
			{children}
		</LayoutContext.Provider>
	);
}

const useLayout = () => useContext(LayoutContext);

export {LayoutContext, LayoutProvider, useLayout};
