import type { Article } from '@/shared/types/article';
import type {
	AwardsResponse,
	AwardsSection,
	BaseResponse,
	Factoid,
	HeroSection,
} from '@/shared/types/global.types';

export type HomePageData = {
	data: {
		publishedAt?: string;
		heroSection?: HeroSection;
		advantages?: Array<Factoid>;
		brokerageAppCard?: BrokerageAppCardProps;
		assetManagementCard?: AssetManagementCardProps;
		financialSolutionsSection?: FinancialSolutionsSectionProps;
		investingStepsSection?: InvestingStepsSectionProps;
		awardsSection?: AwardsSection;
		companiesSection?: CompaniesSectionProps;
		newsSection?: NewsProps;
		interviewSection?: InterviewProps;
		awards?: AwardsResponse;
	};
};

export type HomePageResponse = BaseResponse<HomePageData>;

// app section

export type BrokerageAppCardProps = {
	title?: string;
	description?: string;
	appStoreCaption?: string;
	link?: string;
	armbrokLogo?: {
		alternativeText?: string;
		url?: string;
	};
	phoneMockups?: Array<PhoneMockupsType>;
	button?: ButtonType;
	appStoreLogos?: Array<AppStoreLogosType>;
};

export type PhoneMockupsType = {
	alternativeText?: string;
	formats?: FormatsType;
	url?: string;
};

export type AppStoreLogosType = {
	alternativeText?: string;
	url?: string;
	media?: MediaType;
};

// assets

export type AssetManagementCardProps = {
	title?: string;
	description?: string;
	link?: string;
	mediaContent?: {
		url?: string;
		alternativeText?: string;
		format?: FormatsType;
	};
	button?: ButtonType;
};

// financial

export type FinancialSolutionsSectionProps = {
	title?: string;
	description?: string;
	instruments?: Array<InstrumentType>;
};

export type InstrumentType = {
	title?: string;
	description?: string;
	media?: MediaType;
	link?: string;
};

// StepsSection

export type InvestingStepsSectionProps = {
	title?: string;
	button?: ButtonType;
	steps?: Array<StepsType>;
};

export type StepsType = {
	id?: number;
	title?: string;
	description?: string;
	icon?: string;
	step?: string;
};

// companies

export type CompaniesSectionProps = {
	title?: string;
	companies?: Array<{
		link?: string | null;
		logo: MediaType;
		colorLogo?: MediaType;
	}>;
};

// news

export type NewsProps = {
	news?: Array<Article>;
	title?: string;
	description?: string;
	moreButton?: ButtonType;
};

// interview

export type InterviewProps = {
	title?: string;
	description?: string;
	primaryButton?: ButtonType;
	secondaryButton?: ButtonType;
	videoCaption?: string;
	video?: MediaType;
	videoPoster?: {
		alternativeText?: string;
		formats?: FormatsType;
		url?: string;
	};
};

// shared

export type ButtonType = {
	text?: string;
	link?: string;
};

export type MediaType = {
	alternativeText?: string;
	url?: string;
	formats?: FormatsType;
};

export type FormatsType = {
	large?: ImgType;
	mediuml?: ImgType;
	small?: ImgType;
	thumbnail?: ImgType;
};

export type ImgType = {
	url?: string;
	name?: string;
};
