import cx from 'clsx';

import {
	NAV_LABEL,
	UNIT_PRICE_LABEL,
} from '@/features/graphic/model/graphic.constants';
import type { GraphicMode } from '@/shared/types/global.types';
import { NAV_PER_SHARE_MODE } from '@/widgets/fund-performance/model/fund-performance.constants';

import css from './index.module.css';
import { Paragraph } from './paragraph';

type TooltipContentProps = {
	modeData?: number;
	date: string;
	mode?: GraphicMode;
	yieldNumber?: number;
	comparisonPoints?: Array<{
		name: string;
		y?: number;
	}>;
	isAmd?: boolean;
};

export const CustomTooltipContent = ({
	modeData,
	date,
	mode,
	yieldNumber,
	comparisonPoints,
	isAmd,
}: TooltipContentProps) => {
	return (
		<ul className={cx(css.root, { [css.withPadding]: comparisonPoints })}>
			{yieldNumber && (
				<li className={css.paragraph}>
					<Paragraph title="Yield" description={yieldNumber.toFixed(2) + '%'} />
				</li>
			)}
			{modeData && (
				<li className={css.paragraph}>
					<Paragraph
						title={mode === NAV_PER_SHARE_MODE ? UNIT_PRICE_LABEL : NAV_LABEL}
						description={(isAmd ? '֏' : '$') + modeData}
					/>
				</li>
			)}
			{comparisonPoints && comparisonPoints.length && (
				<>
					{comparisonPoints.map((point, index) => (
						<li
							key={index}
							className={cx(css.paragraph, {
								[css.fundChart]: index === 0,
								[css.benchmarkChart]: index !== 0,
							})}
						>
							{
								<Paragraph
									title={index === 0 ? 'Fund' : 'Benchmark'}
									description={
										point.y
											? `${point.y > 0 ? '+' : ''}` + point.y?.toFixed(2) + '%'
											: '0%'
									}
								/>
							}
						</li>
					))}
				</>
			)}
			<li className={css.paragraph}>
				<Paragraph title="Date" description={date} />
			</li>
		</ul>
	);
};
