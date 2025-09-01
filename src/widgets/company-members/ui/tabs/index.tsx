'use client';

import cx from 'clsx';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { Button } from '@/shared/ui/button';

import css from './index.module.css';

type Tab = {
	label?: string;
	content?: ReactNode;
};

type TabsProps = {
	tabs: Array<Tab>;
};

export const Tabs = ({ tabs }: TabsProps) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	return (
		<div className={css.tabsContainer}>
			<div className={css.tabButtons}>
				{tabs.map((tab, index) => (
					<Button
						key={index}
						className={cx(css.tabButton, {
							[css.active]: activeTab === index,
						})}
						onClick={() => handleTabClick(index)}
					>
						{tab.label}
					</Button>
				))}
			</div>
			<div className={css.tabContent}>{tabs[activeTab].content}</div>
		</div>
	);
};
