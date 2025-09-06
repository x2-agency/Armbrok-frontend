import cx from 'clsx';
import { useState } from 'react';

import { useLayoutContext } from '@/shared/hooks/use-layout-context';
import { Modal } from '@/shared/ui/modal';
import type { SearchDataItem } from '@/widgets/app-layout/types/armbrok-search.types';
import { SearchedNews } from '@/widgets/app-layout/ui/search-modal/searched-news';

import css from './index.module.css';
import { SearchForm } from './search-form';

export const SearchModal = () => {
	const [newsData, setNewsData] = useState<Array<SearchDataItem> | undefined>();
	const { isSearchModalOpen, toggleSearchModalOpen } = useLayoutContext();

	return (
		<Modal
			isModalOpen={isSearchModalOpen}
			toggleModalOpen={toggleSearchModalOpen}
			className={cx(css.root, { [css.open]: isSearchModalOpen })}
		>
			<SearchForm setNewsData={setNewsData} />
			<SearchedNews news={newsData} />
		</Modal>
	);
};
