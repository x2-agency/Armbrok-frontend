import { cubicBezier } from 'framer-motion';

export const GRID_ANIMATION = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', bounce: 0 },
	},
	transition: { duration: 0.367, ease: cubicBezier(0.55, 0, 0.1, 1) },
};
