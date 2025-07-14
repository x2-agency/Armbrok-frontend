export const formatToPercent = (
	firstArgument: number,
	secondArgument: number
) => ((firstArgument / secondArgument - 1) * 100).toFixed(2);
