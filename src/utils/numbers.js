import {toLower} from 'lodash';
import numeral from 'numeral';

export function getFormattedNumber(value, formatter = '0,0') {
	// 3500 will be displayed "3,500" if in U.S. English locale
	return numeral(value).format(formatter);
}

export function getFormattedPrice(
	value,
	currency,
	currencyLabel,
	format = '0,0.00'
) {
	return `${currencyLabel[toLower(currency)]}${getFormattedNumber(
		value,
		format
	)}`;
}
