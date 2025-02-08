import cx from 'clsx';

import { Container } from '@/shared/ui/container';
import { GuaranteesItem } from '@/shared/ui/guarantees-item';

import css from './index.module.css';

export type GuaranteesSectionProps = {
	items: Array<{
		icon: string;
		title: string;
	}>;
	className?: string;
};

export const GuaranteesSection = ({
	items,
	className,
}: GuaranteesSectionProps) => {
	return (
		<Container className={cx(css.root, className)}>
			{items.map((value, index) => (
				<GuaranteesItem key={index} {...value} />
			))}
		</Container>
	);
};
