import type {
	BaseResponse,
	DocumentsSectionProps,
	HeroSection,
	ItemDetail,
	ResidenceCountriesSectionProps,
	ShareholdersSection,
} from '@/shared/types/global.types';

export type InvestorRelationsPageData = {
	heroSection?: HeroSection;
	transparencySection?: ItemDetail;
	residenceCountries?: ResidenceCountriesSectionProps;
	shareholdersMeetingsSection?: DocumentsSectionProps;
	dividendPolicySection?: ItemDetail;
	remunerationSection?: DocumentsSectionProps;
	shareholdersSection?: ShareholdersSection;
};

export type InvestorRelationsPageResponse =
	BaseResponse<InvestorRelationsPageData>;
