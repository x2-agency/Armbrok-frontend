import type {
	BaseResponse,
	DocumentsSectionProps,
	HeroSection,
	ItemDetail,
	ResidenceCountriesSectionProps,
	ShareholdersSection,
	DocumentTabs,
} from '@/shared/types/global.types';

export type InvestorRelationsPageData = {
	publishedAt?: string;
	heroSection?: HeroSection;
	transparencySection?: ItemDetail;
	residenceCountries?: ResidenceCountriesSectionProps;
	shareholdersMeetingsSection?: DocumentsSectionProps;
	dividendPolicySection?: ItemDetail;
	remunerationSection?: DocumentsSectionProps;
	shareholdersSection?: ShareholdersSection;
	disclaimer?: string;
	documentTabsSection?: DocumentTabs;
};

export type InvestorRelationsPageResponse =
	BaseResponse<InvestorRelationsPageData>;
