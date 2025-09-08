'use client';

import parser from 'html-react-parser';

import type { CompanyStructureSection } from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { Tabs } from '@/widgets/company-members/ui/tabs';

import { useParseTabs } from './hooks/use-parse-tabs';
import css from './index.module.css';

export const CompanyMembers = ({ tabs, title }: CompanyStructureSection) => {
	const tabsContent = useParseTabs(tabs);

	if (!tabs?.length || !tabsContent) return null;

	return (
		<Container className={css.root}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<Tabs tabs={tabsContent} />
		</Container>
	);
};
