import type {
	BaseResponse,
	HeroSectionAboutUs,
	ItemDetail,
	ExperienceSection,
	QuoteSection,
	DocumentsSection,
	SecurityPaperItem,
} from '@/shared/types/global.types';

export type InvestmentBankingPageData = {
	heroSection?: HeroSectionAboutUs;
	offerSolutionSection?: ItemDetail;
	ourServicesSection?: ExperienceSection;
	quoteSection?: QuoteSection;
	latestSecuritiesPlacementsSection?: ItemDetail;
	documentsSection?: DocumentsSection;
	securityPapers?: Array<SecurityPaperItem>;
};

export type InvestmentBankingPageResponse =
	BaseResponse<InvestmentBankingPageData>;
