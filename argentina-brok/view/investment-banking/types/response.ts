import type {
	BaseResponse,
	HeroSectionAboutUs,
	ItemDetail,
	ExperienceSection,
	QuoteSection,
	DocumentsSection,
} from '@/shared/types/global.types';

export type InvestmentBankingPageData = {
	heroSection?: HeroSectionAboutUs;
	offerSolutionSection?: ItemDetail;
	ourServicesSection?: ExperienceSection;
	quoteSection?: QuoteSection;
	latestSecuritiesPlacementsSection?: ItemDetail;
	documentsSection?: DocumentsSection;
};

export type InvestmentBankingPageResponse =
	BaseResponse<InvestmentBankingPageData>;
