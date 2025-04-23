import cx from 'clsx';
import Link from 'next/link';

import type { ParentFundProps } from '@/shared/types/global.types';

import css from './index.module.css';
import { DefaultChart } from './ui/default-chart';
import { DefaultLeftPart } from './ui/default-left-part';
import { FundGradient } from './ui/fund-gradient';

export const FundsCard = ({
	title,
	description,
	background,
	chart,
	infoCard,
	mode = 'default',
	slug,
}: ParentFundProps & { mode?: 'default' | 'slider' }) => {
	return (
		<article className={cx(css.root, css[mode])}>
			{mode === 'default' && (
				<>
					<FundGradient />
					<DefaultLeftPart
						background={background}
						title={title}
						description={description}
						infoCard={infoCard}
					/>
					<DefaultChart chart={chart} />
				</>
			)}
			{/* <Link className={css.link} href={`/funds/${slug}`} /> */}
		</article>
	);
};
