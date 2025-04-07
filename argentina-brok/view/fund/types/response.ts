import type {
	AccordionSectionProps,
	BaseResponse,
	ItemDetail,
	ProfixHeroSection,
	QuoteSection,
} from '@/shared/types/global.types';

export type FundPageData = {
	heroSection?: ProfixHeroSection;
	quoteSection?: QuoteSection;
	infoSection?: AccordionSectionProps;
	disclaimer?: ItemDetail;
};

export type FundPageResponse = BaseResponse<FundPageData>;
