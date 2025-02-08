import cx from 'clsx';
import parser from 'html-react-parser';

import { Container } from '@/shared/ui/container';
import type { MembershipCardProps } from '@/shared/ui/membership-card';
import { MembershipCard } from '@/shared/ui/membership-card';

import css from './index.module.css';

type MembershipSectionProps = {
	items: Array<MembershipCardProps>;
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
	return (
		<Container className={cx(css.root, className)}>
			<header className={css.header}>
				{title && <h2 className={css.title}>{parser(title)}</h2>}
				{description && (
					<p className={css.description}>{parser(description)}</p>
				)}
			</header>
			<div className={css.items}>
				{items.map((item, key) => (
					<MembershipCard key={key} {...item} withGreyTitle={withGreyTitles} />
				))}
			</div>
		</Container>
	);
};
