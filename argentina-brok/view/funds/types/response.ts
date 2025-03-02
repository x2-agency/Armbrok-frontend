import type {
	AccordionSectionProps,
	BaseResponse,
	BenefitsSection,
	DocumentsSectionProps,
	ExperienceSection,
	HeroSection,
	QuoteSection,
} from '@/shared/types/global.types';

export type FundsPageData = {
	heroSection?: HeroSection;
	experienceSection?: ExperienceSection;
	benefitsSection?: BenefitsSection;
	quoteSection?: QuoteSection;
	wealthManagementSection?: BenefitsSection;
	howWeAreWorking?: BenefitsSection;
	documentsSection?: DocumentsSectionProps;
	infoSection?: AccordionSectionProps;
};

export type FundsPageResponse = BaseResponse<FundsPageData>;
