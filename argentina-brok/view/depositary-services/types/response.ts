import type {
	AccordionSectionProps,
	BaseResponse,
	BenefitsSection,
	HeroSection,
	QuoteSection,
} from '@/shared/types/global.types';

export type DepositaryServicesPageData = {
	heroSection?: HeroSection;
	primaryServicesSection?: BenefitsSection;
	supplementaryServices?: BenefitsSection;
	benefitsSection?: BenefitsSection;
	quoteSection?: QuoteSection;
	infoSection?: AccordionSectionProps;
};

export type DepositaryServicesPageResponse =
	BaseResponse<DepositaryServicesPageData>;
