export type BaseResponse<T> = {
	data: T & { updatedAt: string; locale?: string; seo?: SeoType | null };
};

/* SEO */

export type SeoType = {
	metaTitle?: string;
	metaDescription?: string;
	shareImage?: MediaData | null;
};

/* HERO SECTION */

export type HeroSection = ItemDetail & {
	button?: LinkItem;
	background: MediaData;
};

export type LinkItem = {
	text: string;
	link: string;
};

export type MediaData = {
	alternativeText: string;
	formats?: {
		large?: ImageFormat;
		small?: ImageFormat;
		medium?: ImageFormat;
		thumbnail?: ImageFormat;
	};
	url?: string;
};

export type ImageFormat = {
	ext?: string;
	url?: string;
	size?: number;
	sizeInBytes?: number;
};

/* ADVANTAGES SECTION */

export type ItemDetail = {
	title: string;
	description?: string;
};

export type Factoid = ItemDetail & {
	id: number;
	icon?: MediaData | null;
};

/* BROKER APP SECTION */ /* CONSULATION CARD SECTION */

export type PosterCard = ItemDetail & {
	mediaContent?: Array<ImageFormat> | ImageFormat | null;
};

/* FINANCIAL SOULUTION SECTION */

export type FinancialSolutionsSection = ItemDetail & {
	instruments?: Array<Instruments>;
};

export type Instruments = ItemDetail & {
	id: number;
	media?: MediaData | null;
};

/* INVESTING START SECTION */

export type InvestingStepsSection = {
	title: string;
	button: LinkItem;
	steps: Array<Factoid>;
};

/* AWARD SECTION */

export type AwardSection = {
	title?: string;
	textButton?: string;
	awards: Array<AwardType>;
};

export type AwardType = {
	id: number;
	startYear: number;
	endYear?: number;
	description: string;
};

/* COMPANY SECTION */

export type CompaniesSection = {
	title: string;
	companies: Array<MediaData>;
};

/* NEWS SECTION */

export type NewsSection = {
	title: string;
	moreButton: LinkItem;
	news: Array<NewsType>;
};

export type NewsType = {
	id?: number;
	publishDate?: string;
	title?: string;
	description?: string;
	author?: AuthorType;
	category?: string | null;
};

export type AuthorType = {
	avatar: string;
	name: string;
};

/* INTERVIEW SECTION */

export type InterviewSection = ItemDetail & {
	primaryButton?: LinkItem;
	secondaryButton?: LinkItem;
	video?: MediaData;
};

/* EXCHANGES SECTION */

export type FlagType = {
	name: string;
	flag?: MediaData | null;
};

export type ExchangesItemType = {
	name: string;
	country?: FlagType | null;
	logo?: MediaData | null;
};

export type ExchangesSection = {
	title: string;
	exchanges: Array<ExchangesItemType>;
};

/* MOBILE APP SECTION */

export type CardItemType = ItemDetail & {
	poster?: MediaData | null;
	mediaContent?: Array<MediaData>;
};

export type MobileAppSection = ItemDetail & {
	cards: Array<CardItemType>;
};

/* QUOTE SECTION */

export type QuoteSection = {
	quote: {
		content: string;
		authorFullName: string;
		authorPosition: string;
		authorExtraInfo: string;
	};
	authorPhoto?: MediaData | null;
};

/* RUNNING TEXT SECTION */

export type RunningTextSection = {
	staticText: string;
	textArray: Array<{
		id: number;
		value: string;
	}>;
};

/* COUNTRIES SECTION */

export type CountriesSection = {
	title: string;
	additionalText: string;
	countries: Array<FlagType>;
};

/* DOCUMENTS SECTION */

export type DocumentsSection = ItemDetail & {
	documents: Array<MediaData>;
};

/* ACCORDION SECTION */

export type Accordion = {
	summary: string;
	description: string;
};

export type AccordionSection = {
	title: string;
	accordions: Array<Accordion>;
};
