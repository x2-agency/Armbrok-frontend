export const defineCellColor = (value: string) => {
	const floatValue = parseFloat(value);

	// year parameter
	if (floatValue > 1980) {
		return 'hidden';
	}

	return floatValue !== 0 ? (floatValue > 0 ? 'green' : 'red') : '';
};
