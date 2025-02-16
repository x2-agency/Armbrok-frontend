import type {
	BaseResponse,
	ExchangesSection,
	Factoid,
	HeroSection,
	FinancialSolutionsSection,
	MobileAppSection,
	CardItemType,
	QuoteSection,
	RunningTextSection,
	CountriesSection,
	InvestingStepsSection,
	DocumentsSection,
	AccordionSection,
} from '@/shared/types/global.types';

export type BrokeragePageData = {
	heroSection?: HeroSection;
	advantages?: Array<Factoid>;
	exchangesSection?: ExchangesSection;
	instrumentsSection?: FinancialSolutionsSection;
	mobileAppSection?: MobileAppSection;
	portfolioSection: Array<CardItemType>;
	quoteSection?: QuoteSection;
	runningTextSection?: RunningTextSection;
	countriesSection?: CountriesSection;
	investingStepsSection?: InvestingStepsSection;
	documentsSection?: DocumentsSection;
	accordionSection: AccordionSection;
};

export type BrokeragePageResponse = BaseResponse<BrokeragePageData>;
