import cx from 'clsx';

import { Link } from '@/i18n/navigation';
import type { ParentFundProps } from '@/shared/types/global.types';

import css from './index.module.css';
import { DefaultChart } from './ui/default-chart';
import { DefaultLeftPart } from './ui/default-left-part';
import { FundGradient } from './ui/fund-gradient';
import { InfoCard } from './ui/info-card';
import { SliderTopPart } from './ui/slider-top-part';

export const FundsCard = ({
	title,
	description,
	background,
	chart,
	infoCard,
	mode = 'default',
	slug,
	className,
}: ParentFundProps & { mode?: 'default' | 'slider'; className?: string }) => {
	return (
		<article className={cx(css.root, css[mode], className)}>
			{mode === 'default' && (
				<>
					<FundGradient />
					<DefaultLeftPart
						background={background}
						title={title}
						description={description}
						infoCard={infoCard}
					/>
					<DefaultChart
						chart={chart}
						annualReturnValue={infoCard?.annualReturn?.value ?? 0}
					/>
				</>
			)}
			{mode === 'slider' && (
				<>
					<SliderTopPart
						chart={chart}
						title={title}
						description={description}
						annualReturnValue={infoCard?.annualReturn?.value ?? 0}
					/>
					<InfoCard {...infoCard} />
				</>
			)}
			<div className={css.overlay} />
			<Link className={css.link} href={`/funds/${slug}`} />
		</article>
	);
};
