import cx from 'clsx';

import SearchSvg from '@/public/assets/icons/header/search.svg';
import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import type { PropsWithClassname } from '@/shared/types/global.types';

import css from './index.module.css';

export type SearchProps = PropsWithClassname & { isDark?: boolean };

export const Search = ({ className, isDark }: SearchProps) => {
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
