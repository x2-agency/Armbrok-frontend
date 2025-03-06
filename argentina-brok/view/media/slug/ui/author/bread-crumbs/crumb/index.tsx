// components/Crumb.tsx
import cx from 'clsx';
import parser from 'html-react-parser';

import { Link } from '@/i18n/navigation';
import Arrow from '@/public/assets/icon/arrow/arrow_right.svg';

import css from './index.module.css';

export type CrumbProps = {
	href: string;
	title: string;
	isLast?: boolean;
	className?: string;
};

export const Crumb = ({ title, href, isLast, className }: CrumbProps) => (
	<>
		{isLast ? (
			<span className={cx(css.title, className)}>{parser(title)}</span>
		) : (
			<>
				<Link className={css.link} href={href}>
					{title}
				</Link>
				<Arrow className={css.arrow} />
			</>
		)}
	</>
);
