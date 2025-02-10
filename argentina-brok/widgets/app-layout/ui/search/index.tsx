import cx from 'clsx';
import Link from 'next/link';

import SearchSvg from '@/public/assets/icons/header/search.svg';

import css from './index.module.css';

export const Search = ({
	href,
	className,
}: {
	href: string;
	className?: string;
}) => {
	return (
		<Link className={cx(css.root, className)} href={href}>
			<SearchSvg className={css.svg} />
		</Link>
	);
};
