import type {
	AccordionSection,
	BaseResponse,
	CountriesSection,
	DocumentsSection,
	ExchangesSection,
	Factoid,
	HeroSection,
	QuoteSection,
	RunningTextSectionProps,
} from '@/shared/types/global.types';
import type { InvestingStepsSectionProps } from '@/view/home/types/response';
import type { InstrumentsSectionProps } from '@/widgets/instruments-section';

export type BrokeragePageData = {
	heroSection?: HeroSection;
	advantages?: Array<Factoid>;
	exchangesSection?: ExchangesSection;
	instrumentsSection?: InstrumentsSectionProps;
	mobileAppSection: MobileAppSectionProps;
	portfolioSection: Array<PortfolioSectionType>;
	quoteSection?: QuoteSection;
	runningTextSection?: RunningTextSectionProps;
	countriesSection?: CountriesSection;
	investingStepsSection?: InvestingStepsSectionProps;
	documentsSection?: DocumentsSection;
	infoSection: AccordionSection;
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

export type BrokeragePageResponse = BaseResponse<BrokeragePageData>;
