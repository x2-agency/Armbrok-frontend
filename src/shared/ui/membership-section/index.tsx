import cx from 'clsx';
import parser from 'html-react-parser';

import type { ExchangesItemType } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { MembershipCard } from '@/shared/ui/membership-card';

import css from './index.module.css';

type MembershipSectionProps = {
	items?: Array<ExchangesItemType>;
	className?: string;
	title?: string;
	description?: string;
	withGreyTitles?: boolean;
};

export const MembershipSection = ({
	items,
	className,
	title,
	description,
	withGreyTitles,
}: MembershipSectionProps) => {
	if (!items) {
		return null;
	}

	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			{description && <p className={css.description}>{parser(description)}</p>}
			<ul
				className={cx(css.items, {
					[css.items4cols]: items.length > 6,
					[css.items5cols]: items.length === 5,
				})}
			>
				{items.map((item, key) => (
					<li key={key}>
						<MembershipCard {...item} withGreyTitle={withGreyTitles} />
					</li>
				))}
			</ul>
		</Container>
	);
};
