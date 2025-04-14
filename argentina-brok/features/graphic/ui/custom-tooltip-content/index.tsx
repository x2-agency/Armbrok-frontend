import {
	NAV_LABEL,
	UNIT_PRICE_LABEL,
} from '@/features/graphic/model/graphic.constants';
import type { GraphicMode } from '@/shared/types/global.types';
import { NAV_PER_SHARE_MODE } from '@/widgets/fund-performance/model/fund-performance.constants';

import css from './index.module.css';
import { Paragraph } from './paragraph';

type TooltipContentProps = {
	modeData: number;
	date: string;
	mode: GraphicMode;
};

export const CustomTooltipContent = ({
	modeData,
	date,
	mode,
}: TooltipContentProps) => {
	return (
		<ul className={css.root}>
			<li className={css.paragraph}>
				<Paragraph
					leftPart={mode === NAV_PER_SHARE_MODE ? UNIT_PRICE_LABEL : NAV_LABEL}
					rightPart={'$' + modeData.toFixed(2)}
				/>
			</li>
			<li className={css.paragraph}>
				<Paragraph leftPart="Date" rightPart={date} />
			</li>
		</ul>
	);
};
