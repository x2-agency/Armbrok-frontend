import type {
	AccordionSectionProps,
	BaseResponse,
	BenefitsSection,
	ItemDetail,
	ProfixHeroSection,
	QuoteSection,
	PortfolioStructureProps,
	FundFactsProps,
	AboutFundProps,
	PerformanceProps,
	ParentFundProps,
} from '@/shared/types/global.types';
import type { HowWeAreWorkingProps } from '@/view/funds/types/response';

export type FundPageData = {
	heroSection?: ProfixHeroSection;
	quoteSection?: QuoteSection;
	infoSection?: AccordionSectionProps;
	disclaimer?: ItemDetail;
	investReasonsSection?: BenefitsSection;
	profixDescription?: HowWeAreWorkingProps;
	portfolioStructureSection?: PortfolioStructureProps;
	fundFactsSection?: FundFactsProps;
	aboutFundSection?: AboutFundProps;
	performanceData?: PerformanceProps;
	parentFunds?: Array<ParentFundProps>;
};

export type FundPageResponse = BaseResponse<FundPageData>;
