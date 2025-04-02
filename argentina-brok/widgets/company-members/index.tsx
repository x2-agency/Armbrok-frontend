'use client';

import parser from 'html-react-parser';

import useMediaQuery from '@/shared/hooks/use-media-query';
import type {
	CompanyStructureSection,
	EmployeeList,
	TreeItem,
} from '@/shared/types/global.types';
import { Container } from '@/shared/ui/container';
import { Tabs } from '@/widgets/company-members/ui/tabs';

import { sortTreeLevels } from './helpers/sort-tree-levels';
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
		const employeesList = tab.content.find(
			item => item.__component === 'shared.employee-list'
		) as EmployeeList | undefined;

		const departmentsList = tab.content.filter(
			item => item.__component === 'shared.company-department'
		) as Array<TreeItem>;

		if (employeesList) {
			return {
				label: tab.tabName,
				content: <CompanyMembersSection employees={employeesList.employees} />,
			};
		}

		if (departmentsList.length > 0) {
			const treeSortedContent = sortTreeLevels(departmentsList);
			return {
				label: tab.tabName,
				content: isMobile ? (
					<TreeMobile {...treeSortedContent} />
				) : (
					<TreeDesktop {...treeSortedContent} />
				),
			};
		}

		return {
			label: tab.tabName,
			content: null,
		};
	});

	return (
		<Container className={css.root}>
			{title && <h2 className={css.title}>{parser(title)}</h2>}
			<Tabs tabs={tabsElem} />
		</Container>
	);
};
