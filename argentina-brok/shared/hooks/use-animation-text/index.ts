import { useEffect, useState } from 'react';

import type { TextArrayType } from '@/shared/types/global.types';

export const useAnimatedText = (
	textArray: Array<TextArrayType>,
	interval: number
) => {
	const [state, setState] = useState({ currentIndex: 0, textIndex: 0 });
	const currentText = textArray[state.currentIndex]?.value || '';

	useEffect(() => {
		const isTextComplete = state.textIndex === currentText.length;

		const timeoutId = setTimeout(
			() => {
				setState(prev => {
					if (!isTextComplete) {
						return { ...prev, textIndex: prev.textIndex + 1 };
					}
					return {
						currentIndex: (prev.currentIndex + 1) % textArray.length,
						textIndex: 0,
					};
				});
			},
			isTextComplete ? 3000 : interval
		);

		return () => clearTimeout(timeoutId);
	}, [state.textIndex, state.currentIndex, currentText, interval, textArray]);

	return {
		displayedText: currentText.slice(0, state.textIndex),
		isCursorVisible: true,
	};
};
