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
};

export const MembershipSection = ({
	items,
	className,
	title,
}: MembershipSectionProps) => {
	return (
		<Container className={cx(css.root, className)}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<div className={css.items}>
				{items.map(item => (
					<MembershipCard key={item.title} {...item} />
				))}
			</div>
		</Container>
	);
};
