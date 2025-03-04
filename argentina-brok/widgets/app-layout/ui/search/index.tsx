import cx from 'clsx';

import { Link } from '@/i18n/navigation';
import SearchSvg from '@/public/assets/icons/header/search.svg';

import css from './index.module.css';

export const Search = ({
	href,
	className,
	isDark,
}: {
	href: string;
	className?: string;
	isDark?: boolean;
}) => {
	return (
		<Link className={cx(css.root, className)} href={href}>
			<SearchSvg className={cx(css.svg, { [css.dark]: isDark })} />
		</Link>
	);
};
