import type {
	BaseResponse,
	HeroSection,
	ExperienceSection,
	BenefitsSection,
	QuoteSection,
	DocumentsSection,
	AccordionSection,
} from '@/shared/types/global.types';

export type AssetManagementPageData = {
	heroSection?: HeroSection;
	experienceSection?: ExperienceSection;
	benefitsSection?: BenefitsSection;
	quoteSection?: QuoteSection;
	wealthManagementSection?: BenefitsSection;
	howWeAreWorking?: BenefitsSection;
	documentSection?: DocumentsSection;
	infoSection?: AccordionSection;
};

export type AssetManagementPageResponse = BaseResponse<AssetManagementPageData>;
