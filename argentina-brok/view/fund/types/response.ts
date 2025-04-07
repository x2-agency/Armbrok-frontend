import type {
	AccordionSectionProps,
	BaseResponse,
	ProfixHeroSection,
	QuoteSection,
} from '@/shared/types/global.types';

export type FundPageData = {
	heroSection?: ProfixHeroSection;
	quoteSection?: QuoteSection;
	infoSection?: AccordionSectionProps;
};

export type FundPageResponse = BaseResponse<FundPageData>;
