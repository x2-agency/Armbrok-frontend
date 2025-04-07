import type { PosterImageProps, VideoProps } from './poster';

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
	background: PosterImageProps;
	backgroundVideo?: VideoProps;
};

export type LinkItem = {
	text?: string;
	link?: string;
	isLoginButton?: boolean;
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
		ext?: '.pdf' | '.xlsx';
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
	publishedAt?: string;
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
	phoneMockups?: Array<ImageFormat> | ImageFormat | null;
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
	buttonText?: string;
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
	slug?: string;
	publishDate?: string;
	title?: string;
	description?: string;
	author?: AuthorType;
	category?: { name: string };
	poster?: MediaData;
};

export type AuthorType = {
	avatar: Avatar;
	name: string;
	email: string;
};

export type Avatar = {
	url: string;
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
	content: string;
	authorFullName: string;
	authorPosition: string;
	authorExtraInfo: string;
	authorPhoto?: MediaData | null;
};

/* RUNNING TEXT SECTION */

export type RunningTextSectionProps = {
	staticText: string;
	textArray: Array<TextArrayType>;
};

export type TextArrayType = {
	id: number;
	value: string;
};

/* COUNTRIES SECTION */

export type CountriesSection = {
	title: string;
	additionalText: string;
	countries: Array<FlagType>;
};

/* DOCUMENTS SECTION */

export type DocumentsSectionProps = ItemDetail & {
	documents?: Array<MediaData>;
};

/* ACCORDION SECTION */

export type Accordion = {
	summary: string;
	description: string;
};

export type AccordionSectionProps = {
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
	place?: string;
	title?: string;
	description?: string;
};

export type HeroSectionAboutUs = ItemDetail & {
	titleLabel?: string;
	button?: LinkItem;
	background?: PosterImageProps;
	factoids?: Array<HeroFactoid & { itemIndex?: string }>;
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
	items?: Array<Factoid>;
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
	__component?: string;
	employees: Array<Employee>;
}

export interface TreeItem {
	id: number;
	level: number;
	value: string;
	__component: string;
}

export interface TreeProps {
	content: Array<TreeItem>;
}

export interface TextItemList {
	list: Array<TextItem>;
}

export interface Tab {
	tabName: string;
	content: Array<EmployeeList | TreeItem>;
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
	className?: string;
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

export type ResidenceCountriesSectionProps = {
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
	shareholders?: Array<ShareholdersItemType>;
};

/* Vacancies */

export type Vacancy = {
	name?: string;
	link?: string;
	opened?: boolean;
};

export type Vacancies = {
	data: Array<Vacancy>;
};

/* SECURITY PAPERS */

export type SecurityPaperItem = {
	name?: string;
	launchDate?: string;
	launchDateLabel?: string;
	ipoVolumeLabel?: string;
	ipoVolumeValue?: number;
	sharePriceLabel?: string;
	sharePriceValue?: number;
	shareIssuesNumberLabel?: string;
	shareIssuesNumberValue?: number;
	logo?: MediaData;
	infoBlock?: Array<ItemDetail>;
	className?: string;
};

export type SecurityPapers = {
	data: Array<SecurityPaperItem>;
};

/* CONTACT CARDS */

export type ContactCardItem = Factoid & {
	contacts?: Array<{ text?: string; link?: string | null }>;
};

/* CONTACT FORM */

export type ContactInput = {
	placeholder?: string;
	required: boolean;
	errorMessage?: string;
	label?: string;
	type: string;
};

export type ContactForm = ItemDetail & {
	captchaCaption?: string;
	sendButtonText?: string;
	nameField: ContactInput;
	emailField: ContactInput;
	subjectField: ContactInput;
	messageField: ContactInput;
};

/* AWARDS */

export type AwardsSection = {
	title?: string;
	buttonText?: string;
};

export type Award = {
	id: number;
	startYear: number;
	endYear?: number;
	description: string;
};

export type AwardsResponse = {
	data: Array<Award>;
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
};

/* Document Tabs */

export type ChildrenTab = {
	tabName: string;
	files: Array<MediaData>;
};

export type DocumentMainTab = {
	tabName: string;
	files: Array<MediaData>;
	childrenTabs: Array<ChildrenTab>;
};

export type DocumentTabs = {
	title?: string;
	tabs: Array<DocumentMainTab>;
};

/* CORDS */

export type Cords = {
	latitude: string;
	longitude: string;
};

/** PROFIX HEROSECTION */

export type AnnualReturn = {
	value?: number;
	label?: string;
};

export type RiskLevel = {
	label?: string;
	level: number;
};

export type MinInvestment = {
	title?: string;
	description?: string;
};

export type InvestmentPeriod = {
	title?: string;
	description?: string;
};

export type CardButton = {
	text: string;
	link: string;
};

export type InfoCard = {
	annualReturn?: AnnualReturn;
	minInvestment?: MinInvestment;
	riskLevel?: RiskLevel;
	investmentPeriod?: InvestmentPeriod;
	button?: CardButton;
};

export type ProfixHeroSection = {
	title?: string;
	description?: string;
	backButtonText?: string;
	background: MediaData;
	infoCard?: InfoCard;
};
