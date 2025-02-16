import type {
	BaseResponse,
	HeroSection,
	BenefitsSection,
	QuoteSection,
	AccordionSection,
} from '@/shared/types/global.types';

export type DepositaryServicesPageData = {
	heroSection?: HeroSection;
	primaryServicesSection?: BenefitsSection;
	supplementaryServices?: BenefitsSection;
	benefitsSection?: BenefitsSection;
	quoteSection?: QuoteSection;
	infoSection?: AccordionSection;
};

export type DepositaryServicesPageResponse =
	BaseResponse<DepositaryServicesPageData>;
