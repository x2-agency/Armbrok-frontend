'use client';

import parser from 'html-react-parser';

import useMediaQuery from '@/shared/hooks/use-media-query';
import type {
	CompanyStructureSection,
	Employee,
} from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { Tabs } from '@/widgets/company-members/ui/tabs';

import css from './index.module.css';
import { CompanyMembersSection } from './ui/members-section';
import { TreeDesktop } from './ui/tree-desktop';
import { TreeMobile } from './ui/tree-mobile';

export const CompanyMembers = ({ tabs, title }: CompanyStructureSection) => {
	const isMobile = useMediaQuery('(max-width: 767px)');

	if (!tabs || tabs.length === 0) {
		return null;
	}

	const tabsElem = tabs.map(tab => {
		return tab.tabName === 'Team'
			? {
					label: tab.tabName,
					content: (
						<CompanyMembersSection {...(tab.content as Array<Employee>)} />
					),
				}
			: {
					label: tab.tabName,
					content: isMobile ? <TreeMobile /> : <TreeDesktop />,
				};
	});

	return (
		<Container className={css.root}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<Tabs tabs={tabsElem} />
		</Container>
	);
};
