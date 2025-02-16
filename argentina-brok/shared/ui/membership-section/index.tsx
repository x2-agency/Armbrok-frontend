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
			<div className={css.header}>
				{title && <h2 className={css.title}>{parser(title)}</h2>}
				{description && (
					<p className={css.description}>{parser(description)}</p>
				)}
			</div>
			<div className={css.items}>
				{items.map((item, key) => (
					<MembershipCard key={key} {...item} withGreyTitle={withGreyTitles} />
				))}
			</div>
		</Container>
	);
};
