import Link from 'next/link';

import SearchSvg from '@/public/assets/icons/header/search.svg';

import css from './index.module.css';

export const Search = ({ href }: { href: string }) => {
	return (
		<Link className={css.root} href={href}>
			<SearchSvg className={css.svg} />
		</Link>
	);
};
