import { useMemo } from 'react';

import useMediaQuery from '@/shared/hooks/use-media-query';
import type {
	CompanyStructureSection,
	TabEmployee,
} from '@/shared/types/global.types';
import { CompanyMembersSection } from '@/widgets/company-members/ui/members-section';
import { ShareholdersDesktop } from '@/widgets/company-members/ui/shareholders/shareholders-desktop';
import { ShareholdersMobile } from '@/widgets/company-members/ui/shareholders/shareholders-mobile';
import { StructureTreeDesktop } from '@/widgets/company-members/ui/structure-tree/structure-tree-desktop';
import { StructureTreeMobile } from '@/widgets/company-members/ui/structure-tree/structure-tree-mobile';

export const useParseTabs = (tabs: CompanyStructureSection['tabs']) => {
	const isMobile = useMediaQuery('(max-width: 767px)');

	const StructureTree = isMobile ? StructureTreeMobile : StructureTreeDesktop;
	const ShareholdersTree = isMobile ? ShareholdersMobile : ShareholdersDesktop;

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
			content: <StructureTree />,
		},
		{
			label: shareholdersItems?.tabName,
			content: <ShareholdersTree />,
		},
	];
};
