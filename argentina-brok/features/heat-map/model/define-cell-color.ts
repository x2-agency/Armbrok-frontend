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

export const defineCellColor = (value: string, opacity?: number): CellColor => {
	const floatValue = parseFloat(value);

	// (Year)
	if (!isNaN(floatValue) && floatValue > 1980) {
		return year;
	}

	// empty
	if (!opacity || floatValue === 0 || isNaN(floatValue)) {
		return hidden;
	}

	const scale = floatValue > 0 ? POSITIVE_SCALE : NEGATIVE_SCALE;

	for (const range of scale) {
		if (opacity > range.threshold) {
			return { color: range.color, background: range.background };
		}
	}

	return hidden;
};
