import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'styles/global.scss';
import theme from 'styles/themes';
import {ColorModeProvider, ColorModeScript} from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ColorModeProvider>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<App />
	</ColorModeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
