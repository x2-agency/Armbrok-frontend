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
	documentsSection?: DocumentsSection;
	infoSection?: AccordionSection;
};

export type AssetManagementPageResponse = BaseResponse<AssetManagementPageData>;
