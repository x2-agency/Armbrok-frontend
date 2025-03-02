import type {
	AccordionSectionProps,
	BaseResponse,
	CountriesSection,
	DocumentsSectionProps,
	ExchangesSection,
	Factoid,
	HeroSection,
	QuoteSection,
	RunningTextSectionProps,
} from '@/shared/types/global.types';
import type {
	InstrumentType,
	InvestingStepsSectionProps,
} from '@/view/home/types/response';

export type BrokeragePageData = {
	heroSection?: HeroSection;
	advantages?: Array<Factoid>;
	exchangesSection?: ExchangesSection;
	instrumentsSection?: InstrumentsProps;
	mobileAppSection: MobileAppSectionProps;
	portfolioSection: Array<PortfolioSectionType>;
	quoteSection?: QuoteSection;
	runningTextSection?: RunningTextSectionProps;
	countriesSection?: CountriesSection;
	investingStepsSection?: InvestingStepsSectionProps;
	documentsSection?: DocumentsSectionProps;
	infoSection: AccordionSectionProps;
};

export type MobileAppSectionProps = {
	title: string;
	description: string;
	cards: Array<CardType>;
};

export type CardType = {
	id: number;
	title: string;
	description: string;
	phoneMockup: {
		id?: number;
		alternativeText?: string;
		url: string;
	};
	appStoreLogos?: Array<AppStoreLogosType>;
};

export type AppStoreLogosType = {
	id?: number;
	url: string;
	alternativeText?: string;
};

export type PortfolioSectionType = {
	id?: number;
	title: string;
	description: string;
	mediaContent?: { url?: string; alternativeText?: string };
};

export type InstrumentsProps = {
	title: string;
	description?: string;
	instruments: Array<InstrumentType>;
};

export type BrokeragePageResponse = BaseResponse<BrokeragePageData>;
