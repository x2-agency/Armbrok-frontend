import type {
	BaseResponse,
	DocumentsSectionProps,
	ExperienceSection,
	HeroSectionAboutUs,
	ItemDetail,
	ParentFundProps,
	QuoteSection,
	SecurityPaperItem,
} from '@/shared/types/global.types';

export type InvestmentBankingPageData = {
	publishedAt?: string;
	heroSection?: HeroSectionAboutUs;
	offerSolutionSection?: ItemDetail;
	ourServicesSection?: ExperienceSection;
	quoteSection?: QuoteSection;
	latestSecuritiesPlacementsSection?: ItemDetail;
	documentsSection?: DocumentsSectionProps;
	securityPapers?: Array<SecurityPaperItem>;
	parentFunds?: Array<ParentFundProps>;
};

export type InvestmentBankingPageResponse =
	BaseResponse<InvestmentBankingPageData>;
