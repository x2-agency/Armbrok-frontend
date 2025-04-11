const hidden = {
	color: '#212121',
	background: 'unset',
};

const year = {
	color: '#6B6B6B',
	background: 'unset',
};

export const defineCellColor = (value: string, opacity?: number) => {
	const floatValue = parseFloat(value);

	// year parameter
	if (floatValue > 1980) {
		return year;
	}

	if (floatValue === 0 || !opacity) {
		return hidden;
	}

	if (floatValue > 0 && opacity) {
		if (opacity > 0.86) {
			return {
				color: '#EEFDE7',
				background: '#109922',
			};
		} else if (opacity <= 0.86 && opacity > 0.72) {
			return {
				color: '#EEFDE7',
				background: '#17B31D',
			};
		} else if (opacity <= 0.72 && opacity > 0.58) {
			return {
				color: '#EEFDE7',
				background: '#4FD148',
			};
		} else if (opacity <= 0.58 && opacity > 0.44) {
			return {
				color: '#109922',
				background: '#7FE86E',
			};
		} else if (opacity <= 0.44 && opacity > 0.3) {
			return {
				color: '#109922',
				background: '#B4F7A1',
			};
		} else if (opacity <= 0.3 && opacity > 0.16) {
			return {
				color: '#17B31D',
				background: '#DDFBCF',
			};
		} else {
			return {
				color: '#17B31D',
				background: '#EEFDE7',
			};
		}
	}

	if (floatValue < 0 && opacity) {
		if (opacity > 0.86) {
			return {
				color: '#FEF1E9',
				background: '#BF1D29',
			};
		} else if (opacity <= 0.86 && opacity > 0.72) {
			return {
				color: '#FEF1E9',
				background: '#DF2C29',
			};
		} else if (opacity <= 0.72 && opacity > 0.58) {
			return {
				color: '#FEF1E9',
				background: '#EB6A5B',
			};
		} else if (opacity <= 0.58 && opacity > 0.44) {
			return {
				color: '#DF2C29',
				background: '#F5937D',
			};
		} else if (opacity <= 0.44 && opacity > 0.3) {
			return {
				color: '#BF1D29',
				background: '#FBC0A9',
			};
		} else if (opacity <= 0.3 && opacity > 0.16) {
			return {
				color: '#DF2C29',
				background: '#FDE2D4',
			};
		} else {
			return {
				color: '#DF2C29',
				background: '#FEF1E9',
			};
		}
	}

	return hidden;
};
