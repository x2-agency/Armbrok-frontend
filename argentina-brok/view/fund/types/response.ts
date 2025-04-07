import type {
	AccordionSectionProps,
	BaseResponse,
	BenefitsSection,
	ItemDetail,
	ProfixHeroSection,
	QuoteSection,
} from '@/shared/types/global.types';

export type FundPageData = {
	heroSection?: ProfixHeroSection;
	quoteSection?: QuoteSection;
	infoSection?: AccordionSectionProps;
	disclaimer?: ItemDetail;
	investReasonsSection?: BenefitsSection;
};

export type FundPageResponse = BaseResponse<FundPageData>;
