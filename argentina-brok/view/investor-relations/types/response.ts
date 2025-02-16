import type {
	BaseResponse,
	HeroSection,
	ItemDetail,
} from '@/shared/types/global.types';

export type InvestorRelationsPageData = {
	heroSection?: HeroSection;
	transparencySection?: ItemDetail;
};

export type InvestorRelationsPageResponse =
	BaseResponse<InvestorRelationsPageData>;
