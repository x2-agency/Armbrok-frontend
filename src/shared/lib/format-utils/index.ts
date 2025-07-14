export const formatNumbersInText = (text: string): string => {
	return text.replace(/\d+\.?\d*/g, match => {
		const number = parseFloat(match);
		if (isNaN(number)) return match;

		return new Intl.NumberFormat('en-US', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 2,
		}).format(number);
	});
};
