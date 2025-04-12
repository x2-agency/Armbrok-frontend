import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useRef, useState } from 'react';

import type { GraphicProps } from '@/shared/types/global.types';

import { getSeriesData } from './helpers/get-series-data';
import { useDateControllers } from './hooks/use-date-controllers';
import css from './index.module.css';
import { getDateControllersOptions } from './model/get-date-controllers-options';
import { graphicOptions } from './model/graphic-options';
import { GraphicDateControllers } from './ui/graphic-date-controllers';
import { GraphicFilter } from './ui/graphic-filter';

export const Graphic = ({
	graphics,
	opened,
}: {
	graphics: GraphicProps;
	opened: boolean;
}) => {
	const fundKey: string = Object.keys(graphics)[0];
	const fundData = graphics[fundKey];

	const [showChart, setShowChart] = useState(true);

	const seriesData = getSeriesData(fundData);
	const options = graphicOptions(seriesData);

	const { chartRef, setRange } = useDateControllers();
	const dateControllers = getDateControllersOptions({ setRange });

	const debounceTimeoutRef = useRef<number | null>(null);
	const lastHeightRef = useRef<number>(
		document.documentElement?.clientHeight || 0
	);
	const isRemountingRef = useRef(false);

	useEffect(() => {
		const target = document.documentElement || document.body;
		if (!target) return;

		let animationFrameId: number;
		let isAnimating = false;

		const checkIfAnimating = () => {
			return false;
		};

		const observer = new ResizeObserver(entries => {
			for (const entry of entries) {
				const newHeight = entry.contentRect.height;

				if (checkIfAnimating()) {
					isAnimating = true;
					return;
				}

				if (isAnimating) {
					isAnimating = false;
					lastHeightRef.current = newHeight;
					return;
				}

				if (Math.abs(newHeight - lastHeightRef.current) > 5) {
					cancelAnimationFrame(animationFrameId);

					animationFrameId = requestAnimationFrame(() => {
						if (isRemountingRef.current || isAnimating) return;

						console.log(
							'Реальный ресайз (не анимация). Новая высота:',
							newHeight
						);
						lastHeightRef.current = newHeight;

						if (!isAnimating) {
							isRemountingRef.current = true;
							setShowChart(false);

							setTimeout(() => {
								setShowChart(true);
								isRemountingRef.current = false;
							}, 50);
						}
					});
				}
			}
		});

		observer.observe(target);

		return () => {
			observer.disconnect();
			cancelAnimationFrame(animationFrameId);
			if (debounceTimeoutRef.current) {
				clearTimeout(debounceTimeoutRef.current);
			}
		};
	}, [opened]);

	return (
		<div className={css.root}>
			<section className={css.controls}>
				<GraphicDateControllers buttons={dateControllers} />
				<GraphicFilter />
			</section>
			{showChart && (
				<HighchartsReact
					highcharts={Highcharts}
					constructorType="stockChart"
					options={options}
					ref={chartRef}
				/>
			)}
		</div>
	);
};
