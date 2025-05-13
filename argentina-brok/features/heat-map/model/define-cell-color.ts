type CellColor = {
	color: string;
	background: string;
};

const hidden: CellColor = {
	color: '#212121',
	background: 'unset',
};

const year: CellColor = {
	color: '#6B6B6B',
	background: 'unset',
};

const POSITIVE_SCALE: Array<{
	threshold: number;
	color: string;
	background: string;
}> = [
	{ threshold: 0.86, color: '#EEFDE7', background: '#109922' },
	{ threshold: 0.72, color: '#EEFDE7', background: '#17B31D' },
	{ threshold: 0.58, color: '#EEFDE7', background: '#4FD148' },
	{ threshold: 0.44, color: '#109922', background: '#7FE86E' },
	{ threshold: 0.3, color: '#109922', background: '#B4F7A1' },
	{ threshold: 0.16, color: '#17B31D', background: '#DDFBCF' },
	{ threshold: 0, color: '#17B31D', background: '#EEFDE7' },
];

const NEGATIVE_SCALE: Array<{
	threshold: number;
	color: string;
	background: string;
}> = [
	{ threshold: 0.86, color: '#FEF1E9', background: '#BF1D29' },
	{ threshold: 0.72, color: '#FEF1E9', background: '#DF2C29' },
	{ threshold: 0.58, color: '#FEF1E9', background: '#EB6A5B' },
	{ threshold: 0.44, color: '#DF2C29', background: '#F5937D' },
	{ threshold: 0.3, color: '#BF1D29', background: '#FBC0A9' },
	{ threshold: 0.16, color: '#DF2C29', background: '#FDE2D4' },
	{ threshold: 0, color: '#DF2C29', background: '#FEF1E9' },
];

const POSITIVE_SCALE_PERCENTS: Array<{
	threshold: number;
	color: string;
	background: string;
}> = [
	{ threshold: 15, color: '#EEFDE7', background: '#109922' },
	{ threshold: 12.5, color: '#EEFDE7', background: '#17B31D' },
	{ threshold: 10, color: '#EEFDE7', background: '#4FD148' },
	{ threshold: 7.5, color: '#109922', background: '#7FE86E' },
	{ threshold: 5, color: '#109922', background: '#B4F7A1' },
	{ threshold: 2.5, color: '#17B31D', background: '#DDFBCF' },
	{ threshold: 0.5, color: '#17B31D', background: '#EEFDE7' },
	{ threshold: 0, color: '#17B31D', background: '#F9FFF6' },
];

const NEGATIVE_SCALE_PERCENTS: Array<{
	threshold: number;
	color: string;
	background: string;
}> = [
	{ threshold: -15, color: '#FEF1E9', background: '#BF1D29' },
	{ threshold: -12.5, color: '#FEF1E9', background: '#DF2C29' },
	{ threshold: -10, color: '#FEF1E9', background: '#EB6A5B' },
	{ threshold: -7.5, color: '#DF2C29', background: '#F5937D' },
	{ threshold: -5, color: '#BF1D29', background: '#FBC0A9' },
	{ threshold: -2.5, color: '#DF2C29', background: '#FDE2D4' },
	{ threshold: -0.5, color: '#DF2C29', background: '#FEF1E9' },
	{ threshold: -0, color: '#DF2C29', background: '#FFFAF8' },
];

export const defineCellColor = (
	value: string,
	isTotal: boolean,
	opacity?: number
): CellColor => {
	const floatValue = parseFloat(value);

	// (Year)
	if (!isNaN(floatValue) && floatValue > 1980) {
		return year;
	}

	// empty
	if (!opacity || floatValue === 0 || isNaN(floatValue)) {
		return hidden;
	}

	if (isTotal) {
		const scale = floatValue > 0 ? POSITIVE_SCALE : NEGATIVE_SCALE;

		for (const range of scale) {
			if (opacity > range.threshold) {
				return { color: range.color, background: range.background };
			}
		}
	} else {
		if (floatValue > 0) {
			for (const range of POSITIVE_SCALE_PERCENTS) {
				if (floatValue >= range.threshold) {
					return { color: range.color, background: range.background };
				}
			}
		} else {
			for (const range of NEGATIVE_SCALE_PERCENTS) {
				if (floatValue <= range.threshold) {
					return { color: range.color, background: range.background };
				}
			}
		}
	}

	return hidden;
};
