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
	name?: string;
	alternativeText: string;
	formats?: {
		large?: ImageFormat;
		small?: ImageFormat;
		medium?: ImageFormat;
		thumbnail?: ImageFormat;
	};
	file?: {
		name?: string;
		url?: string;
		size?: number;
		ext?: string;
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
	title?: string;
	description?: string;
};

export type Factoid = ItemDetail & {
	id?: number;
	icon?: MediaData | null;
	media?: MediaData | null;
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
	title?: string;
	button?: LinkItem;
	steps?: Array<Factoid>;
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
	poster?: MediaData;
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
	description?: string;
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

/* EXPERIENCE SECTION */

export type ExperienceSection = ItemDetail & {
	factoids: Array<Factoid>;
};

/* BENEFITS SECTION */

export type BenefitsSection = {
	title: string;
	factoids: Array<Factoid>;
};

/* ABOUT US HERO SECTION */

export type HeroFactoid = {
	number?: number;
	title?: string;
	description?: string;
};

export type HeroSectionAboutUs = ItemDetail & {
	titleLabel?: string;
	button?: LinkItem;
	background?: MediaData;
	factoids?: Array<HeroFactoid>;
};

/* VALUES SECTION */

export type ValuesSection = ItemDetail & {
	factoids?: Array<Factoid>;
};

/* CORPORATE EVENTS SECTION */

export type EventItemType = {
	year?: number;
	description?: string;
};

export type CorporateEventsSection = {
	title?: string;
	events?: Array<EventItemType>;
};

/* COMPANY DETAILS SECTION */

export type CompanyDetailsSection = ItemDetail & {
	factoids?: Array<Factoid>;
};

/* MEMBERSHIP SECTION */

export type MembershipItemType = ItemDetail & {
	logo: MediaData;
};

export type MembershipSection = ItemDetail & {
	companies: Array<ExchangesItemType>;
};

/* PROJECTS SECTION */

export type ProjectItemType = {
	description?: string;
	name?: string;
	logo?: MediaData;
};

export type ProjectsSection = ItemDetail & {
	companies?: Array<ProjectItemType>;
};

/* COMPANY STRUCTURE SECTION */

export interface Employee {
	fullName?: string;
	position?: string;
	qualification?: string;
	career?: string;
	avatar?: MediaData;
}

export interface TextItem {
	value?: string;
}

export interface EmployeeList {
	employees: Array<Employee>;
}

export interface TextItemList {
	list: Array<TextItem>;
}

export interface Tab {
	tabName: string;
	content: Array<EmployeeList | TextItemList>;
}

export type CompanyStructureSection = {
	title?: string;
	tabs?: Array<Tab>;
};

/* EMPLOYEE STORY SECTION */

export type EmployeeStoriesItem = {
	story: string;
	employee: {
		fullName: string;
		position: string;
		qualification?: string;
		career?: string;
		avatar?: MediaData;
	};
};

export type EmployeeStorySection = ItemDetail & {
	employeeStories?: Array<EmployeeStoriesItem>;
};

/* OFFICE SLIDER */

export type SliderItem = {
	files?: Array<MediaData>;
};

export type SliderItemWithText = {
	media?: MediaData;
	title?: string;
	caption?: string;
};

export type OfficeSliderSection = ItemDetail & {
	slider?: SliderItem | Array<SliderItemWithText>;
};

/* SUBSCRIBE EMAIL FORM */

export type SubscribeEmailForm = ItemDetail & {
	emailPlaceholder?: string;
	subscribeButtonText?: string;
};

/* RESIDENCE COUNTRIES */

export type ResidenceCountriesSection = {
	title?: string;
	additionalText?: string;
	countries?: Array<FlagType>;
};

/* SHAREHOLDERS SECTION */

export type StockInfoType = {
	label: string;
	value: number;
};

export type ShareholdersItemType = {
	name: string;
	share: number;
	photo: MediaData;
};

export type ShareholdersSection = {
	stockInfoTitle?: string;
	shareholdersTitle?: string;
	stockInfo?: Array<StockInfoType>;
	shareholders?: ShareholdersItemType;
};
