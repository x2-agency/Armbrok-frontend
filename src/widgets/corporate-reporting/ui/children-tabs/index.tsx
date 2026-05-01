'use client';

import cx from 'clsx';
import { useState } from 'react';

import type { ChildrenTab } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { Files } from '@/widgets/corporate-reporting/ui/files';

import css from './index.module.css';

type ChildrenTabsProps = {
	tabs: Array<ChildrenTab>;
};

export const ChildrenTabs = ({ tabs }: ChildrenTabsProps) => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	return (
		<div className={css.root}>
			<div className={css.tabs}>
				{tabs.map((tab, key) => (
					<Button
						key={key}
						onClick={() => setTabIndex(key)}
						className={cx(css.button, { [css.selected]: key === tabIndex })}
					>
						{tab.tabName}
					</Button>
				))}
			</div>
			<Files files={tabs[tabIndex].files ?? []} />
		</div>
	);
};
