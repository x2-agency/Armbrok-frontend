'use client';

import cx from 'clsx';

import { useAnimatedText } from '@/shared/hooks/use-animation-text';
import type { TextArrayType } from '@/shared/types/global.types';

import css from './index.module.css';

export type AnimatedTextProps = {
	textArray: Array<TextArrayType>;
	interval: number;
	className?: string;
};

export const AnimatedText = ({
	textArray,
	interval,
	className,
}: AnimatedTextProps) => {
	const { displayedText, isCursorVisible } = useAnimatedText(
		textArray,
		interval
	);

	return (
		<div className={cx(css.text, className)}>
			<span>{displayedText}</span>
			{isCursorVisible && <span className={css.cursor}>|</span>}
		</div>
	);
};
