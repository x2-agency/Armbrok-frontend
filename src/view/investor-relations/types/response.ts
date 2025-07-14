import type {
	BaseResponse,
	DocumentsSectionProps,
	DocumentTabs,
	HeroSection,
	ItemDetail,
	ParentFundProps,
	ResidenceCountriesSectionProps,
	ShareholdersSection,
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
	disclaimer?: { title?: string; description?: string };
	documentTabsSection?: DocumentTabs;
	parentFunds?: Array<ParentFundProps>;
};

export type InvestorRelationsPageResponse =
	BaseResponse<InvestorRelationsPageData>;
