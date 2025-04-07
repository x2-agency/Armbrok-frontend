import type {
	AccordionSectionProps,
	BaseResponse,
	BenefitsSection,
	ItemDetail,
	ProfixHeroSection,
	QuoteSection,
} from '@/shared/types/global.types';
import type { HowWeAreWorkingProps } from '@/view/funds/types/response';

export type FundPageData = {
	heroSection?: ProfixHeroSection;
	quoteSection?: QuoteSection;
	infoSection?: AccordionSectionProps;
	disclaimer?: ItemDetail;
	investReasonsSection?: BenefitsSection;
	profixDescription?: HowWeAreWorkingProps;
};

export type FundPageResponse = BaseResponse<FundPageData>;
