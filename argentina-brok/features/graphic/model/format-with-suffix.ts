export const formatWithSuffix = (val: number): string => {
	const absVal = Math.abs(val);
	if (absVal >= 1_000_000_000) {
		return (val / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
	}
	if (absVal >= 1_000_000) {
		return (val / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
	}
	if (absVal >= 1_000) {
		return (val / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
	}
	return val.toString();
};
