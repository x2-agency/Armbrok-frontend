import type {
	AwardSection,
	BaseResponse,
	CompaniesSection,
	Factoid,
	FinancialSolutionsSection,
	HeroSection,
	InterviewSection,
	InvestingStepsSection,
	NewsSection,
	PosterCard,
} from '@/shared/types/global.types';

export type HomePageData = {
	heroSection?: HeroSection;
	advantages?: Array<Factoid>;
	brokerageAppCard?: PosterCard;
	consultationCard?: PosterCard;
	financialSolutionsSection?: FinancialSolutionsSection;
	investingStepsSection?: InvestingStepsSection;
	awardSection?: AwardSection;
	companiesSection?: CompaniesSection;
	newsSection?: NewsSection;
	interviewSection?: InterviewSection;
};

export type HomePageResponse = BaseResponse<HomePageData>;
