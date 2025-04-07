import type {
	BaseResponse,
	ProfixHeroSection,
} from '@/shared/types/global.types';

export type FundPageData = {
	heroSection?: ProfixHeroSection;
};

export type FundPageResponse = BaseResponse<FundPageData>;
