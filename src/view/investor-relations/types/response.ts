import type {
	BaseResponse,
	DocumentsSectionProps,
	DocumentTabs,
	HeroSection,
	ItemDetail,
	ResidenceCountriesSectionProps,
	ShareholdersSection,
} from '@/shared/types/global.types';
import type { DividendHistorySectionType } from '@/widgets/divident-history-section';

export type InvestorRelationsPageData = {
	publishedAt?: string;
	heroSection?: HeroSection;
	transparencySection?: ItemDetail;
	residenceCountries?: ResidenceCountriesSectionProps;
	dividendHistorySection?: DividendHistorySectionType;
	shareholdersMeetingsSection?: DocumentsSectionProps;
	dividendPolicySection?: ItemDetail;
	remunerationSection?: DocumentsSectionProps;
	shareholdersSection?: ShareholdersSection;
	disclaimer?: { title?: string; description?: string };
	documentTabsSection?: DocumentTabs;
};

export type InvestorRelationsPageResponse =
	BaseResponse<InvestorRelationsPageData>;
