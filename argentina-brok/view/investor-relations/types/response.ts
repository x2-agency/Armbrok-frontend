import type {
	BaseResponse,
	HeroSection,
	ItemDetail,
	ResidenceCountriesSection,
	DocumentsSection,
	ShareholdersSection,
} from '@/shared/types/global.types';

export type InvestorRelationsPageData = {
	heroSection?: HeroSection;
	transparencySection?: ItemDetail;
	residenceCountries?: ResidenceCountriesSection;
	shareholdersMeetingsSection?: DocumentsSection;
	dividendPolicySection?: ItemDetail;
	remunerationSection?: DocumentsSection;
	shareholdersSection?: ShareholdersSection;
};

export type InvestorRelationsPageResponse =
	BaseResponse<InvestorRelationsPageData>;
