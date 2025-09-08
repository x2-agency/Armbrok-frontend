import { useMemo } from 'react';

import useMediaQuery from '@/shared/hooks/use-media-query';
import type {
	CompanyStructureSection,
	ShareholdersItemType,
	StructureTreeProps,
	TabEmployee,
} from '@/shared/types/global.types';
import { CompanyMembersSection } from '@/widgets/company-members/ui/members-section';
import { StructureDesktop } from '@/widgets/company-members/ui/structure/structure-desktop';
import { StructureMobile } from '@/widgets/company-members/ui/structure/structure-mobile';
import { Shareholders } from '@/widgets/shareholders';

export const useParseTabs = (tabs: CompanyStructureSection['tabs']) => {
	const isMobile = useMediaQuery('(max-width: 767px)');

	const StructureTree = isMobile ? StructureMobile : StructureDesktop;

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
				<StructureTree
					{...(companyStructureItems?.content[0] as StructureTreeProps)}
				/>
			),
		},
		{
			label: shareholdersItems?.tabName,
			content: (
				<Shareholders
					withoutStockInfo
					shareholders={
						shareholdersItems?.content as Array<ShareholdersItemType>
					}
				/>
			),
		},
	];
};
