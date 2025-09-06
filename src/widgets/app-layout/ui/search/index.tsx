import cx from 'clsx';

import SearchSvg from '@/public/assets/icons/header/search.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';

import css from './index.module.css';

export const Search = ({
	className,
	isDark,
}: {
	className?: string;
	isDark?: boolean;
}) => {
	const { toggleSearchModalOpen } = useLayoutContext();

	return (
		<button
			className={cx(css.root, className)}
			onClick={() => toggleSearchModalOpen(true)}
		>
			<SearchSvg className={cx(css.svg, { [css.dark]: isDark })} />
		</button>
	);
};
