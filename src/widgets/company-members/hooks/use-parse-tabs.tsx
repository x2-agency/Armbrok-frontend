import { useMemo } from 'react';

import useMediaQuery from '@/shared/hooks/use-media-query';
import type {
	CompanyStructureSection,
	TabEmployee,
	TreeItem,
} from '@/shared/types/global.types';
import { sortTreeLevels } from '@/widgets/company-members/helpers/sort-tree-levels';
import { CompanyMembersSection } from '@/widgets/company-members/ui/members-section';
import { TreeDesktop } from '@/widgets/company-members/ui/tree-desktop';
import { TreeMobile } from '@/widgets/company-members/ui/tree-mobile';

export const useParseTabs = (tabs: CompanyStructureSection['tabs']) => {
	const isMobile = useMediaQuery('(max-width: 767px)');

	const TreeComponent = isMobile ? TreeMobile : TreeDesktop;

	const employeesData = useMemo(
		() => tabs?.find(tab => tab.tabId === 'management'),
		[tabs]
	);

	const companyStructureItems = useMemo(
		() => tabs?.find(tab => tab.tabId === 'company-structure'),
		[tabs]
	);

	const shareholdersItems = useMemo(
		() => tabs?.find(tab => tab.tabId === 'shareholders'),
		[tabs]
	);

	if (!tabs?.length) return null;

	return [
		{
			label: employeesData?.tabName,
			content: (
				<CompanyMembersSection
					employees={employeesData?.content as Array<TabEmployee>}
				/>
			),
		},
		{
			label: companyStructureItems?.tabName,
			content: (
				<TreeComponent
					{...sortTreeLevels(companyStructureItems?.content as Array<TreeItem>)}
				/>
			),
		},
		{
			label: shareholdersItems?.tabName,
			content: (
				<TreeComponent
					{...sortTreeLevels(shareholdersItems?.content as Array<TreeItem>)}
				/>
			),
		},
	];
};
