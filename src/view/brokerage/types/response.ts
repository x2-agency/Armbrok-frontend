import type {
	AccordionSectionProps,
	BaseResponse,
	CountriesSection,
	DocumentsSectionProps,
	ExchangesSection,
	Factoid,
	HeroSection,
	ParentFundProps,
	QuoteSection,
	RunningTextSectionProps,
} from '@/shared/types/global.types';
import type {
	InstrumentType,
	InvestingStepsSectionProps,
} from '@/view/home/types/response';

export type BrokeragePageData = {
	publishedAt?: string;
	heroSection?: HeroSection;
	advantages?: Array<Factoid>;
	exchangesSection?: ExchangesSection;
	instrumentsSection?: InstrumentsProps;
	mobileAppSection: MobileAppSectionProps;
	quoteSection?: QuoteSection;
	runningTextSection?: RunningTextSectionProps;
	countriesSection?: CountriesSection;
	investingStepsSection?: InvestingStepsSectionProps;
	documentsSection?: DocumentsSectionProps;
	infoSection: AccordionSectionProps;
	parentFunds?: Array<ParentFundProps>;
};

export type MobileAppSectionProps = {
	title: string;
	caption?: string;
	description: string;
	cards: Array<CardType>;
	otherPages: Array<PortfolioSectionType>;
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
