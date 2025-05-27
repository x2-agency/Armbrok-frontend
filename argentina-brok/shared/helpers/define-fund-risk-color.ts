export const EASY_LEVEL = '#28b164';
export const EASY_MEDIUM_LEVEL = '#93c636';

export const MEDIUM_LEVEL = '#e0bb75';
export const MEDIUM_HARD_LEVEL = '#d8845c';

export const HARD_LEVEL = '#b13134';

export const defineFundRiskLevel = (level: number) => {
	switch (level) {
		case 1:
			return EASY_LEVEL;
		case 2:
			return EASY_MEDIUM_LEVEL;
		case 3:
			return MEDIUM_LEVEL;
		case 4:
			return MEDIUM_HARD_LEVEL;
		case 5:
			return HARD_LEVEL;
		default:
			return 'inherit';
	}
};
