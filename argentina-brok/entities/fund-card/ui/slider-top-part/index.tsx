import parser from 'html-react-parser';

import { SliderChart } from '@/entities/fund-card/ui/slider-chart';
import type {
	ItemDetail,
	ParentFundChartPoint,
} from '@/shared/types/global.types';

import css from './index.module.css';

type SliderTopPartProps = ItemDetail & {
	chart: Array<ParentFundChartPoint>;
	annualReturnValue?: number;
};

export const SliderTopPart = ({
	chart,
	title,
	description,
	annualReturnValue,
}: SliderTopPartProps) => {
	return (
		<div className={css.root}>
			{(title || description) && (
				<div className={css.titleBlock}>
					{title && <h5 className={css.title}>{parser(title)}</h5>}
					{description && (
						<p className={css.description}>{parser(description)}</p>
					)}
				</div>
			)}
			<SliderChart chart={chart} annualReturnValue={annualReturnValue} />
		</div>
	);
};
