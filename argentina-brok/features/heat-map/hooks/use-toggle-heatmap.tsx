import { useEffect, useRef, useState } from 'react';

type UseToggleHeatMapProps = {
	opened: boolean;
};

export const useToggleHeatMap = ({ opened }: UseToggleHeatMapProps) => {
	const tableRef = useRef<HTMLDivElement | null>(null);
	const [height, setHeight] = useState<string | number>(
		opened ? 'auto' : '0px'
	);
	const isTransitioningRef = useRef(false);

	useEffect(() => {
		const el = tableRef.current;
		if (!el) return;

		if (opened) {
			const scrollHeight = el.scrollHeight;
			setHeight(`${scrollHeight}px`);
			isTransitioningRef.current = true;

			const handleTransitionEnd = () => {
				if (opened) {
					setHeight('auto');
				}
				el.removeEventListener('transitionend', handleTransitionEnd);
				isTransitioningRef.current = false;
			};
			el.addEventListener('transitionend', handleTransitionEnd);
		} else {
			if (isTransitioningRef.current) return;

			const currentHeight = el.offsetHeight;
			setHeight(`${currentHeight}px`);

			requestAnimationFrame(() => {
				setHeight('0px');
			});
		}
	}, [opened]);

	return {
		tableRef,
		height,
	};
};
