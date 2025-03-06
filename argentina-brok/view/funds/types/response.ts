import type {
	AccordionSectionProps,
	BaseResponse,
	BenefitsSection,
	DocumentsSectionProps,
	ExperienceSection,
	Factoid,
	HeroSection,
} from '@/shared/types/global.types';

export type FundsPageData = {
	publishedAt?: string;
	heroSection?: HeroSection;
	experienceSection?: ExperienceSection;
	investingAdvantages?: BenefitsSection;
	howFundWorksSection?: BenefitsSection;
	howWeAreWorkingSection?: HowWeAreWorkingProps;
	disclaimerSection?: HowWeAreWorkingProps;
	documentsSection?: DocumentsSectionProps;
	infoSection?: AccordionSectionProps;
};

export type HowWeAreWorkingProps = {
	title?: string;
	description?: string;
	factoids?: Array<Factoid>;
	items?: Array<Content>;
};

export type Content = {
	content?: string;
};

export type FundsPageResponse = BaseResponse<FundsPageData>;
