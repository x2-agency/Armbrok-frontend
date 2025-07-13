export const transformNumber = (originalNumber: number | undefined) => {
	if (typeof originalNumber === 'undefined') {
		return '0';
	}

	const parts = originalNumber.toString().split('.');
	let integerPart = parts[0];
	const decimalPart = parts.length > 1 ? `.${parts[1]}` : '';

	integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	return integerPart + decimalPart;
};
