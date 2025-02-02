import Link from 'next/link';
import SearchSvg from '../../../../../../public/assets/icon/header/search.svg';
import css from './index.module.css';
export const Search = ({ href }: { href: string }) => {
	return (
		<Link className={css.root} href={href}>
			<SearchSvg />
		</Link>
	);
};
