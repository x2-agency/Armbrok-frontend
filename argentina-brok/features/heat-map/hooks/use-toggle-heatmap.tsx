import { useEffect, useRef, useState } from 'react';

type UseToggleHeatMapProps = {
	opened: boolean;
};

export const useToggleHeatMap = ({ opened }: UseToggleHeatMapProps) => {
	const tableRef = useRef<HTMLDivElement | null>(null);
	const [height, setHeight] = useState<string | number>(
		opened ? 'auto' : '0px'
	);

	useEffect(() => {
		const el = tableRef.current;
		if (!el) return;

		if (opened) {
			const scrollHeight = el.scrollHeight;
			setHeight(`${scrollHeight}px`);

			const handleTransitionEnd = () => {
				setHeight('auto');
				el.removeEventListener('transitionend', handleTransitionEnd);
			};
			el.addEventListener('transitionend', handleTransitionEnd);
		} else {
			if (height === 'auto') {
				const scrollHeight = el.scrollHeight;
				setHeight(`${scrollHeight}px`);
				requestAnimationFrame(() => {
					setHeight('0px');
				});
			} else {
				setHeight('0px');
			}
		}
	}, [opened, height]);

	return {
		tableRef,
		height,
	};
};
