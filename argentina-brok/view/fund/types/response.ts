import type {
	BaseResponse,
	ProfixHeroSection,
	QuoteSection,
} from '@/shared/types/global.types';

export type FundPageData = {
	heroSection?: ProfixHeroSection;
	quoteSection?: QuoteSection;
};

export type FundPageResponse = BaseResponse<FundPageData>;
