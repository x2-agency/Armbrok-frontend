import cx from 'clsx';
import parser from 'html-react-parser';

import type { AuthorType } from '@/shared/types/article';

import css from './index.module.css';

export type NameAndPositionProps = {
	data?: AuthorType;
	className?: string;
};

export const NameAndPosition = ({ data, className }: NameAndPositionProps) => {
	const { fullName, name, position } = data ?? {};

	return (
		<div className={cx(css.root, className)}>
			<p className={css.name}>{parser(fullName ?? '')}</p>

			<p className={css.name}>{parser(name ?? '')}</p>
			<p className={css.position}>{parser(position ?? '')}</p>
		</div>
	);
};
