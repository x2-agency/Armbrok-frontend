import cx from 'clsx';
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

import type { AwardSectionProps } from './awards.types';
import css from './index.module.css';
import { AwardItem } from './ui/award-item';

export const AwardsSection = ({
	title,
	awards,
	className,
	withViewAll,
}: AwardSectionProps) => {
	const chunkArray = (arr: AwardSectionProps['awards'], size: number) => {
		return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
			arr.slice(i * size, i * size + size)
		);
	};
	const groupedAwards = chunkArray(awards, 4);

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title ?? '')}</h2>}
			<ul className={cx(css.awardWrap, { [css.withButton]: withViewAll })}>
				{groupedAwards.map((row, rowIndex) => (
					<li
						className={cx(css.row, { [css.centered]: row.length < 4 })}
						key={rowIndex}
					>
						{row.map((award, index) => (
							<AwardItem {...award} key={index} />
						))}
					</li>
				))}
			</ul>
			{withViewAll && (
				<Button href="#" variant="next" iconRotate={180} className={css.button}>
					View all awards
				</Button>
			)}
		</Container>
	);
};
