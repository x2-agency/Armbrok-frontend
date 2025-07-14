import type {
	AccordionSectionProps,
	BaseResponse,
	BenefitsSection,
	DocumentsSectionProps,
	ExperienceSection,
	HeroSection,
	ParentFundProps,
	QuoteSection,
} from '@/shared/types/global.types';
import type { AssetManagementCardProps } from '@/view/home/types/response';

export type AssetManagementPageData = {
	publishedAt?: string;
	heroSection?: HeroSection;
	experienceSection?: ExperienceSection;
	benefitsSection?: BenefitsSection;
	quoteSection?: QuoteSection;
	assetManagementCard?: AssetManagementCardProps;
	wealthManagementSection?: BenefitsSection;
	howWeAreWorking?: BenefitsSection;
	documentsSection?: DocumentsSectionProps;
	infoSection?: AccordionSectionProps;
	parentFunds?: Array<ParentFundProps>;
};

export type AssetManagementPageResponse = BaseResponse<AssetManagementPageData>;
