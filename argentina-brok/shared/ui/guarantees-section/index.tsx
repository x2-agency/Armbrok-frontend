import cx from 'clsx';
import parser from 'html-react-parser';

import type { Factoid } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { GuaranteesItem } from '@/shared/ui/guarantees-item';

import css from './index.module.css';

export type GuaranteesSectionProps = {
	items?: Array<Factoid>;
	className?: string;
	title?: string;
};

export const GuaranteesSection = ({
	items,
	className,
	title,
}: GuaranteesSectionProps) => {
	if (!items || items.length === 0) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<ul className={css.items}>
				{items.map((value, index) => (
					<li key={index} className={css.item}>
						<GuaranteesItem
							title={value.title}
							icon={value.media?.url ?? ''}
							description={value.description}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};
