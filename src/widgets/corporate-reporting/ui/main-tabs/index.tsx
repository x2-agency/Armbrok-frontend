'use client';

import cx from 'clsx';
import { useState } from 'react';

import type { DocumentMainTab } from '@/shared/types/global.types';
import { Button } from '@/shared/ui/button';
import { ChildrenTabs } from '@/widgets/corporate-reporting/ui/children-tabs';
import { Files } from '@/widgets/corporate-reporting/ui/files';

import css from './index.module.css';

type MainTabs = {
	tabs: Array<DocumentMainTab>;
};

export const MainTabs = ({ tabs }: MainTabs) => {
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
			{tabs[tabIndex].childrenTabs.length ? (
				<ChildrenTabs tabs={tabs[tabIndex].childrenTabs} />
			) : (
				<Files files={tabs[tabIndex].files} className={css.files} />
			)}
		</div>
	);
};
