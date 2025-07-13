import type {
	AccordionSectionProps,
	BaseResponse,
	BenefitsSection,
	DocumentsSectionProps,
	HeroSection,
	ParentFundProps,
	QuoteSection,
} from '@/shared/types/global.types';

export type DepositaryServicesPageData = {
	publishedAt?: string;
	heroSection?: HeroSection;
	primaryServicesSection?: BenefitsSection;
	supplementaryServices?: BenefitsSection;
	benefitsSection?: BenefitsSection;
	quoteSection?: QuoteSection;
	documentsSection?: DocumentsSectionProps;
	infoSection?: AccordionSectionProps;
	parentFunds?: Array<ParentFundProps>;
};

export type DepositaryServicesPageResponse =
	BaseResponse<DepositaryServicesPageData>;
